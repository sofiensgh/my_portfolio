import { motion } from 'framer-motion'
import { aboutBadges, brand, education, experiences } from '../content/portfolio'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'

export function AboutPage() {
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
              <div>                {brand.avatar && (
                  <div className="mb-8 flex justify-center lg:justify-start">
                    <div className="gradient-border glass rounded-2xl p-1">
                      <img
                        src={brand.avatar}
                        alt={brand.name}
                        className="h-48 w-48 rounded-xl object-contain"
                      />
                    </div>
                  </div>
                )}                <SectionHeading
                  eyebrow="// ABOUT"
                  title="Hey — I’m Sofien."
                  subtitle="I like building reliable products with thoughtful UX and clean backend foundations."
                />

                <div className="flex flex-wrap gap-2">
                  {aboutBadges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
                  I’m focused on building modern web apps that feel fast and polished.
                  I enjoy owning features end-to-end — planning, implementation,
                  deployment, and iteration. I’m currently looking for internships
                  and freelance opportunities where I can ship real value and keep
                  leveling up with strong engineering teams.
                </p>
              </div>

              <div className="space-y-6">
                <div className="gradient-border glass rounded-2xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p
                        className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted-2)]"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        EDUCATION
                      </p>
                      <h3 className="mt-3 text-base font-semibold text-[var(--color-fg)]">
                        {education.degree} · {education.school}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {education.detail}
                      </p>
                    </div>
                    {education.logo && (
                      <img
                        src={education.logo}
                        alt="TekUp University Logo"
                        className="h-16 w-16 object-contain ml-4"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <Tag key={c} label={c} />
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className="mb-4 font-mono text-xs tracking-[0.18em] text-[var(--color-muted-2)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    EXPERIENCE
                  </p>
                  <ExperienceTimeline items={experiences} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  )
}

