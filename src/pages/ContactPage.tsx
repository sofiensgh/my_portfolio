import { motion } from 'framer-motion'
import { ArrowRight, Code, Link, Mail, Phone } from 'lucide-react'
import { IdeaCallout } from '../components/IdeaCallout'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
    >
      <section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="// CONTACT"
                  title="Let’s build something."
                  subtitle="If you have an idea, a role, or a project — I’d love to hear about it."
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    onClick={() =>
                      (window.location.href = 'mailto:sofiensghaier2@gmail.com')
                    }
                  >
                    Email me <ArrowRight size={16} />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/sofien-essghaier-61b5862a2',
                        '_blank',
                        'noreferrer',
                      )
                    }
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Mail,
                    label: 'EMAIL',
                    value: 'sofiensghaier2@gmail.com',
                    href: 'mailto:sofiensghaier2@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'PHONE',
                    value: '+216 29659711',
                    href: 'tel:+21629659711',
                  },
                  {
                    icon: Code,
                    label: 'GITHUB',
                    value: 'github.com/sofiensgh',
                    href: 'https://github.com/sofiensgh',
                  },
                  {
                    icon: Link,
                    label: 'LINKEDIN',
                    value: 'www.linkedin.com/in/sofien-essghaier-61b5862a2',
                    href: 'https://www.linkedin.com/in/sofien-essghaier-61b5862a2',
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="gradient-border glass group rounded-2xl p-5 transition hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted-2)]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {c.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[var(--color-fg)]">
                          {c.value}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition group-hover:border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] group-hover:text-[var(--color-fg)]">
                        <c.icon size={18} />
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-[var(--color-muted)]">
                      Tap to open
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <IdeaCallout />
    </motion.div>
  )
}

