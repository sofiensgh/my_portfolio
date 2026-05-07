import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

export function IdeaCallout() {
  return (
    <section aria-label="Hire me callout" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_70%,transparent)] px-6 py-14 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur sm:px-10"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--color-accent)_14%,transparent)] blur-3xl" />
              <div className="absolute -bottom-28 right-[-6rem] h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--color-accent-2)_14%,transparent)] blur-3xl" />
            </div>

            <h2
              className="relative mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-[var(--color-fg)] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Have an idea worth building?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              Open to internships, freelance gigs, and collaboration on cool side projects.
              Let&apos;s talk.
            </p>

            <div className="relative mt-8 flex justify-center">
              <Button
                variant="primary"
                onClick={() =>
                  (window.location.href = 'mailto:sofiensghaier2@gmail.com')
                }
                className="px-6 py-3 text-sm"
              >
                Start a conversation <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

