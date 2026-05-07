import { Code, Link, Mail } from 'lucide-react'
import { brand } from '../content/portfolio'
import { Container } from './ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl text-sm text-[var(--color-muted)]">
            <p>
              <span className="text-[var(--color-fg)]">BASED IN</span>{' '}
              {brand.location} TN — open to remote work and internships worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-3 py-2 text-sm text-[var(--color-muted)] transition hover:border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] hover:text-[var(--color-fg)]"
              href="mailto:sofiensghaier2@gmail.com"
            >
              <Mail size={16} /> Email
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-3 py-2 text-sm text-[var(--color-muted)] transition hover:border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] hover:text-[var(--color-fg)]"
              href="https://github.com/sofiensgh"
              target="_blank"
              rel="noreferrer"
            >
              <Code size={16} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-3 py-2 text-sm text-[var(--color-muted)] transition hover:border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] hover:text-[var(--color-fg)]"
              href="https://www.linkedin.com/in/sofien-essghaier-61b5862a2"
              target="_blank"
              rel="noreferrer"
            >
              <Link size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-[var(--color-muted-2)]">
          © 2026 {brand.name} – Built with care &amp; caffeine.
        </p>
      </Container>
    </footer>
  )
}

