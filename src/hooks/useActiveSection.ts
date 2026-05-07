import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds: string[], opts?: { rootMargin?: string }) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? 'home')

  const ids = useMemo(() => sectionIds, [sectionIds])

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: opts?.rootMargin ?? '-20% 0px -65% 0px',
      },
    )

    for (const el of els) observer.observe(el)
    return () => observer.disconnect()
  }, [ids, opts?.rootMargin])

  return active
}

