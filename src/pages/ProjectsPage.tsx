import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { projects, githubConfig, type Project } from '../content/portfolio'
import { fetchGithubRepos } from '../lib/github'
import { ProjectCard } from '../components/ProjectCard'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ProjectsPage() {
  const [displayProjects, setDisplayProjects] = useState<Project[]>(projects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)

      // Fetch GitHub repos
      const githubProjects = await fetchGithubRepos()

      if (githubProjects.length > 0) {
        // Separate pinned and non-pinned repos
        const pinned = githubProjects.filter((p) =>
          githubConfig.pinnedRepos.includes(p.title)
        )
        const unpinned = githubProjects.filter(
          (p) => !githubConfig.pinnedRepos.includes(p.title)
        )

        // Combine: static projects + pinned repos + unpinned repos
        const combined = [...projects, ...pinned, ...unpinned]
        setDisplayProjects(combined)
      }

      setLoading(false)
    }

    loadProjects()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
    >
      <section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="//ARCHIVE"
              title="Things I've built."
              subtitle="A few projects spanning full-stack apps, automation, and modern UI work."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {displayProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            {loading && (
              <div className="mt-8 text-center text-sm text-[var(--color-secondary)]">
                Loading more projects...
              </div>
            )}
          </div>
        </Container>
      </section>
    </motion.div>
  )
}
