import { motion } from 'framer-motion'
import { ArrowUpRight, Code } from 'lucide-react'
import type { Project } from '../content/portfolio'
import { Tag } from './ui/Tag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="gradient-border glass relative rounded-2xl p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className="inline-flex rounded-lg border border-[var(--color-border)] bg-white/5 px-2 py-1 font-mono text-[11px] tracking-wide text-[var(--color-muted)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.year}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-[var(--color-fg)]">
            {project.title}
          </h3>
          <p
            className="mt-1 font-mono text-xs tracking-[0.18em] text-[var(--color-muted-2)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.role}
          </p>
        </div>

        {project.links?.length ? (
          <div className="flex items-center gap-1">
            {project.links.map((l) => {
              const Icon = l.label === 'GitHub' ? Code : ArrowUpRight
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition hover:border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] hover:text-[var(--color-fg)]"
                  aria-label={l.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </motion.article>
  )
}

