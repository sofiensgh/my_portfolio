import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-xs tracking-[0.2em] text-[var(--color-muted-2)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {eyebrow}
        </span>
        <motion.span
          aria-hidden="true"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '4rem', opacity: 1 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ duration: 0.6 }}
          className="h-px bg-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
        />
      </div>
      <h2
        className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-fg)] sm:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

