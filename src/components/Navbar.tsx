import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="sticky top-0 z-50">
      <Container>
        <div className="py-3">
          <div
            className="glass gradient-border flex h-14 items-center justify-between rounded-full px-3"
            style={{ boxShadow: '0 10px 30px -18px var(--shadow-color)' }}
          >
            <button
              type="button"
              onClick={() => {
                navigate('/')
                setOpen(false)
              }}
              className="group inline-flex items-center gap-2 rounded-full px-2 text-sm font-bold tracking-tight text-[var(--color-fg)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>sofien.dev</span>
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_-2px_color-mix(in_oklab,var(--color-accent)_80%,transparent)]"
              />
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {pages.map((p) => (
                <NavLink
                  key={p.to}
                  to={p.to}
                  end={p.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? 'text-[var(--color-fg)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {p.label}
                      {isActive ? (
                        <span className="absolute inset-x-3 -bottom-[9px] h-[2px] bg-[var(--color-accent)]" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
              <div className="ml-2 flex items-center gap-2">
                <a
                  href="/CV_Sofien_Sghaier.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-[0_0_0_1px_var(--color-border)] transition hover:text-[var(--color-fg)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent-2)_35%,transparent)]"
                >
                  <Download size={16} />
                  CV
                </a>
                <Button variant="outline" className="rounded-full" onClick={() => navigate('/contact')}>
                  Hire me
                </Button>
                <ThemeToggle />
              </div>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Open menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden"
          >
            <Container>
              <div className="glass gradient-border mt-2 flex flex-col gap-1 rounded-3xl p-2">
                {pages.map((p) => (
                  <NavLink
                    key={p.to}
                    to={p.to}
                    end={p.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-3 text-left text-sm transition ${
                        isActive
                          ? 'bg-white/5 text-[var(--color-fg)]'
                          : 'text-[var(--color-muted)] hover:bg-white/5 hover:text-[var(--color-fg)]'
                      }`
                    }
                  >
                    {p.label}
                  </NavLink>
                ))}
                <div className="border-t border-[var(--color-border)] py-2">
                  <div className="px-3 py-2 text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                    Theme
                  </div>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="w-full rounded-xl px-3 py-3 text-left text-sm transition hover:bg-white/5 text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                  >
                    {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                  </button>
                </div>
                <div className="pt-2">
                  <a
                    href="/CV_Sofien_Sghaier.pdf"
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--color-fg)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_35%,transparent)] transition hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_55%,transparent),0_0_26px_-8px_color-mix(in_oklab,var(--color-accent)_70%,transparent)]"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setOpen(false)
                        navigate('/contact')
                      }}
                    >
                      Hire me
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


