'use client'
import React from 'react'

export function ContactForm() {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:denildominic11@gmail.com?subject=${subject}&body=${body}`
  }
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input name="name" required className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="Jane Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" type="email" required className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="jane@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea name="message" rows={5} className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="Write your message here..." />
      </div>
      <button className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium">Send</button>
      
    </form>
  )
}
