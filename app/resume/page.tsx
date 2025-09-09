export const metadata = { title: 'Resume — Denil Dominic', description: 'Resume' }
export default function Page() {
  return (
    <section className="section"><div className="container">
      <h1 className="text-3xl md:text-4xl font-extrabold">Resume</h1>
      <p className="mt-2 opacity-80">If the PDF doesn’t display, use the download link.</p>
      <div className="mt-6 rounded-2xl border overflow-hidden">
        <iframe src="/resume.pdf#view=FitH" title="Resume" className="w-full h-[85vh]" />
      </div>
      <div className="mt-4"><a href="/resume.pdf" target="_blank" className="rounded-xl border px-5 py-3 no-underline">Download PDF</a></div>
    </div></section>
  )
}
