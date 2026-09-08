import Image from 'next/image'

import Reveal from '@/components/motion/Reveal'
import { ArrowIcon } from '@/components/ui/Button'
import type { Project } from '@/content/projects'

type Props = {
  project: Project
  index: number
  flip?: boolean
  priority?: boolean
}

export default function ProjectFeature({ project, index, flip, priority }: Props) {
  const shot = project.shots?.[0]

  return (
    <article className="group grid gap-8 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
      <Reveal className={`lg:col-span-8 ${flip ? 'lg:order-2' : ''}`}>
        <div className="frame aspect-[16/11] sm:aspect-[16/10]">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            priority={priority}
            sizes="(min-width: 1536px) 990px, (min-width: 1024px) 64vw, 92vw"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
          />
        </div>
        {shot ? (
          <div className="mt-4 grid grid-cols-12 gap-4">
            <div className={`frame col-span-8 aspect-[16/9] ${flip ? 'col-start-5' : ''}`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1536px) 660px, (min-width: 1024px) 42vw, 60vw"
                className="object-cover object-top"
              />
            </div>
            <div className="col-span-4 flex items-end">
              <p className="eyebrow max-w-[16ch] leading-relaxed">{shot.alt}</p>
            </div>
          </div>
        ) : null}
      </Reveal>

      <Reveal delay={0.1} className={`flex flex-col lg:col-span-4 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline justify-between">
          <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
          <span className="eyebrow">{project.platform}</span>
        </div>
        <h2 className="mt-6 text-h2">{project.title}</h2>
        <p className="mt-5 text-body text-fg-muted">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 text-small">
          <div className="border-t border-line pt-3">
            <dt className="eyebrow mb-2">Client</dt>
            <dd className="text-fg">{project.client}</dd>
          </div>
          <div className="border-t border-line pt-3">
            <dt className="eyebrow mb-2">Industry</dt>
            <dd className="text-fg">{project.industry}</dd>
          </div>
          <div className="col-span-2 border-t border-line pt-3">
            <dt className="eyebrow mb-2">Services</dt>
            <dd className="text-fg">{project.services.join(' · ')}</dd>
          </div>
        </dl>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-8 self-start text-body"
          >
            Visit live site
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
          </a>
        ) : null}
      </Reveal>
    </article>
  )
}
