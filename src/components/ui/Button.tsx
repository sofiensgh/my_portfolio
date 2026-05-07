import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'outline'

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: HTMLMotionProps<'button'> & {
  variant?: Variant
  className?: string
  children: ReactNode
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_oklab,var(--color-accent)_55%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]'

  const variants: Record<Variant, string> = {
    primary:
      'bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-accent)_70%,black),color-mix(in_oklab,var(--color-accent-2)_62%,black))] text-[var(--color-fg)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_50%,transparent),0_0_34px_-10px_color-mix(in_oklab,var(--color-accent)_80%,transparent)]',
    secondary:
      'bg-transparent text-[var(--color-fg)] shadow-[0_0_0_1px_var(--color-border)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent-2)_35%,transparent)]',
    outline:
      'bg-transparent text-[var(--color-fg)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_35%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_60%,transparent),0_0_30px_-10px_color-mix(in_oklab,var(--color-accent)_80%,transparent)]',
  }

  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

