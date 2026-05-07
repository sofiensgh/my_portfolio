import type { Experience } from '../content/portfolio'

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-6">
      {items.map((e) => (
        <li key={e.title + e.date} className="relative pl-7">
          <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_22px_-6px_color-mix(in_oklab,var(--color-accent)_80%,transparent)]" />
          <span className="absolute left-[5px] top-5 h-[calc(100%+12px)] w-px bg-[var(--color-border)]" />

          <div className="glass rounded-2xl p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <div>
                <p className="text-sm font-semibold text-[var(--color-fg)]">
                  {e.title}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {e.org}
                  {e.location ? ` · ${e.location}` : ''}
                </p>
              </div>
              <p
                className="font-mono text-xs tracking-wide text-[var(--color-muted-2)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {e.date}
              </p>
            </div>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-muted)]">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

