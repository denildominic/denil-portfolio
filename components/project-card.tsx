import Image from 'next/image'

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  image?: string
  imageAlt?: string
}

export function ProjectCard({ title, description, tags, href, image, imageAlt }: Project) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? <a href={href} target="_blank" className="no-underline block">{children}</a> : <div>{children}</div>

  return (
    <div className="card !p-4 md:!p-5 hover:shadow-md transition-shadow">
      <Wrapper>
        {image && (
          <div className="relative mb-3 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-md aspect-[16/10] md:aspect-[16/10]">
            {/* Use aspect-[4/3] or aspect-[16/9] depending on your images */}
            <Image src={image} alt={imageAlt || title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        )}
        <h3 className="text-lg md:text-xl font-semibold leading-tight">{title}</h3>
        <p className="mt-1.5 text-sm md:text-[15px] opacity-80">{description}</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-[11px] md:text-xs">{t}</span>)}
        </div>
      </Wrapper>
    </div>
  )
}
