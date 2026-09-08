import Image from 'next/image'
import { Link } from 'next-view-transitions'

import Reveal from '@/components/motion/Reveal'
import { ArrowIcon } from '@/components/ui/Button'
import type { Project } from '@/content/projects'

type Props = {
  project: Project
  index: number
  aspect?: 'wide' | 'standard' | 'tall'
  sizes: string
  priority?: boolean
  delay?: number
}

const aspectClass = {
  wide: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  tall: 'aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]',
}

export default function ProjectCard({ project, index, aspect = 'standard', sizes, priority, delay = 0 }: Props) {
  return (
    <Reveal as="article" delay={delay} className="group">
      <Link href={`/work#${project.slug}`} className="block rounded-lg outline-offset-4">
        <div className={`frame ${aspectClass[aspect]}`}>
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
            <span className="eyebrow rounded-full border border-line bg-ink/60 px-3 py-2 text-fg backdrop-blur-md">
              {project.platform}
            </span>
            <span className="flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-fg text-ink opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 md:mt-6">
          <span className="eyebrow pt-[0.45rem]">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-h4 text-fg">{project.title}</h3>
              <span className="text-small text-fg-dim">{project.industry}</span>
            </div>
            <p className="mt-2 max-w-[52ch] text-small leading-relaxed text-fg-muted">{project.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-small text-fg-dim" aria-label="Services">
              {project.services.map((s) => (
                <li key={s} className="after:ml-3 after:text-line-strong after:content-['/'] last:after:content-none">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}
