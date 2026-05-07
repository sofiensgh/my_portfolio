import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { CustomCursor } from './CustomCursor'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-grid min-h-dvh">
      <CustomCursor />
      <Navbar />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  )
}

