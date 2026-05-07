import type { Project } from '../content/portfolio'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  stargazers_count: number
  language: string | null
  fork: boolean
  topics: string[]
}

// Extra data for known repos (live URLs, videos, tech stacks)
const repoEnrichment: Record<
  string,
  { liveUrl?: string; videoUrl?: string; tech?: string[] }
> = {
  'mern-job-board': {
    liveUrl: 'https://mern-job-board.vercel.app',
    tech: ['MERN', 'React Router', 'JWT', 'Tailwind'],
  },
  'ai-calling-assistant': {
    liveUrl: 'https://ai-calling-dashboard.vercel.app',
    tech: ['Vapi AI', 'React', 'Tailwind', 'Node.js', 'MongoDB'],
  },
  'web-scraping-toolkit': {
    tech: ['Puppeteer', 'Node.js', 'TypeScript', 'Playwright', 'Docker'],
  },
}

export async function fetchGithubRepos(): Promise<Project[]> {
  const githubUsername =
    import.meta.env.VITE_GITHUB_USERNAME ||
    import.meta.env.VITE_DEFAULT_GITHUB_USERNAME

  if (!githubUsername) {
    console.warn('GitHub username not configured')
    return []
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=stars&direction=desc`
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter out forks
    const filtered = repos.filter((repo) => !repo.fork)

    // Map to Project format and enrich
    const projects: Project[] = filtered.map((repo) => {
      const enriched = repoEnrichment[repo.name] || {}
      const techs = enriched.tech || (repo.language ? [repo.language] : [])

      return {
        year: new Date(repo.url).getFullYear().toString(),
        title: repo.name,
        role: 'PROJECT',
        description: repo.description || 'No description',
        tech: techs.filter((t): t is string => t !== null),
        links: [
          { label: 'GitHub' as const, href: repo.url },
          ...(enriched.liveUrl ? [{ label: 'Live' as const, href: enriched.liveUrl }] : []),
        ],
      }
    })

    return projects
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}
