export function scrollToId(id: string, opts?: { offset?: number }) {
  const el = document.getElementById(id)
  if (!el) return

  const offset = opts?.offset ?? 80
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

