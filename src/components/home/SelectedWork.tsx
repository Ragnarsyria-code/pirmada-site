import { Link } from 'next-view-transitions'

import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/work/ProjectCard'
import { featuredProjects } from '@/content/projects'

export default function SelectedWork() {
  const [lead, ...rest] = featuredProjects

  return (
    <section aria-labelledby="work-title" className="container-x section-y">
      <SectionHeader
        id="work-title"
        eyebrow="Selected work"
        title="Products people use every day, built with the care they deserve."
        action={
          <Link href="/work" className="link-underline text-body">
            All work
          </Link>
        }
      />

      <div className="mt-16 grid gap-y-16 md:mt-24 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-12">
          <ProjectCard project={lead} index={0} aspect="wide" sizes="(min-width: 1536px) 1408px, 92vw" />
        </div>
        {rest.map((p, i) => (
          <div key={p.slug} className={i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}>
            <ProjectCard
              project={p}
              index={i + 1}
              aspect="standard"
              sizes={i === 0 ? '(min-width: 1536px) 810px, (min-width: 768px) 56vw, 92vw' : '(min-width: 1536px) 570px, (min-width: 768px) 40vw, 92vw'}
              delay={i * 0.08}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
