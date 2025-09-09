export function Section({ id, title, subtitle, children }:{ id:string; title:string; subtitle?:string; children:React.ReactNode }) {
  return <section id={id} className="section"><div className="container"><div className="mb-8">
    <p className="text-sm uppercase tracking-widest opacity-70">{subtitle}</p>
    <h2 className="text-3xl md:text-4xl font-extrabold mt-1">{title}</h2></div>{children}</div></section>
}
