'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
const nav = [{href:'#home',label:'Home'},{href:'#about',label:'About'},{href:'#skills',label:'Skills'},{href:'#projects',label:'Projects'},{href:'#experience',label:'Experience'},{href:'#contact',label:'Contact'}]
export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 backdrop-blur bg-[rgb(var(--bg))]/70">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-bold">your.name</Link>
        <nav className="hidden md:flex items-center gap-6">{nav.map(n=><a key={n.href} href={n.href} className="text-sm">{n.label}</a>)}<ThemeToggle/></nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2 text-sm">Menu</button>
      </div>
      {open && <div className="md:hidden border-t border-black/5 bg-[rgb(var(--bg))]"><div className="container py-3 flex flex-col gap-3">{nav.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</a>)}
      <ThemeToggle/></div></div>}
    </header>
  )
}
