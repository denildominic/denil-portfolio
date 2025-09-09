'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false); useEffect(()=>setMounted(true),[])
  const active = theme === 'system' ? systemTheme : theme
  const isDark = active === 'dark'
  return <button className="rounded-xl border px-3 py-2 text-sm" onClick={()=>setTheme(isDark?'light':'dark')}>
    {mounted ? (isDark ? '🌙 Dark' : '☀️ Light') : 'Theme'}
  </button>
}
