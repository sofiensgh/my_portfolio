import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  brand,
} from '../content/portfolio'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { scrollToId } from '../lib/scroll'

const reveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HomePage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="min-h-[calc(100dvh-64px)]"
    >
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] blur-3xl" />
          <div className="absolute -bottom-28 right-[-6rem] h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--color-accent-2)_14%,transparent)] blur-3xl" />
        </div>

        <Container>
          <div className="py-20 sm:py-28">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              {brand.availability}
            </motion.div>

            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="show"
              className="text-glow mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {brand.tagline}
            </motion.h1>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              I&apos;m <span className="text-[var(--color-fg)]">Sofien</span> — a
              third-year Software Engineering student at TekUp University in Tunis. I
              build full-stack web apps end-to-end, from React interfaces to Node.js
              backends and MongoDB databases.
            </motion.p>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button variant="primary" onClick={() => scrollToId('highlights', { offset: 88 })}>
                What I do <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" onClick={() => navigate('/contact')}>
                Get in touch
              </Button>
            </motion.div>

            <div id="highlights" className="mt-12 grid gap-3 sm:grid-cols-3">
              {['MERN-stack', 'Scraping & automation', 'Clean UI systems'].map((t) => (
                <div key={t} className="glass rounded-2xl p-4">
                  <p className="text-sm text-[var(--color-muted)]">{t}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-fg)]">
                    Shipping-focused, end-to-end
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  )
}

