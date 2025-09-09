import Image from 'next/image'
export type Project = { title:string; description:string; tags:string[]; href?:string; image?:string; imageAlt?:string }

export function ProjectCard({ title, description, tags, href, image, imageAlt }: Project) {
  const Content = () => (<>
    {image && (
      <div className="relative mb-4 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg aspect-[4/3]">
        <Image src={image} alt={imageAlt||title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>
    )}
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 opacity-80">{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">{tags.map(t=><span key={t} className="rounded-full border px-3 py-1 text-xs">{t}</span>)}</div>
  </>)

  return href ? (
    <a href={href} target={href.startsWith('/') ? '_self' : '_blank'} rel={href.startsWith('/')?undefined:'noopener noreferrer'} className="card block hover:shadow-lg transition-shadow cursor-pointer no-underline">
      <Content />
    </a>
  ) : <div className="card"><Content/></div>
}
