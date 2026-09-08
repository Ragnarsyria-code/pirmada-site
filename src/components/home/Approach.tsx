import Reveal from '@/components/motion/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

export const processSteps = [
  {
    step: 'Discover',
    text: 'We start with the business question, not the deliverable. Goals, audience, constraints and what already exists.',
  },
  {
    step: 'Define',
    text: 'Positioning, structure and scope in writing, so everyone agrees what "done" looks like before design begins.',
  },
  {
    step: 'Design',
    text: 'Interface systems and prototypes you can click through. We resolve hierarchy, states and motion on real content.',
  },
  {
    step: 'Build',
    text: 'Production code with performance, accessibility and SEO treated as requirements, not a final checklist.',
  },
  {
    step: 'Launch & grow',
    text: 'Deployment, QA on real devices, then the maintenance and iteration that keep a product sharp after release.',
  },
]

export default function Approach() {
  return (
    <section aria-labelledby="approach-title" className="border-t border-line">
      <div className="container-x section-y">
        <SectionHeader id="approach-title" eyebrow="How we work" title="A process built to remove surprises.">
          Every engagement moves through the same five stages. The rhythm keeps decisions early, feedback specific and the
          finished product close to the one we agreed on.
        </SectionHeader>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:mt-24 md:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 0.07} className="flex flex-col gap-10 bg-ink p-6 md:min-h-[20rem] md:p-7">
              <span className="eyebrow">Stage 0{i + 1}</span>
              <div className="mt-auto">
                <h3 className="text-h4 text-fg">{s.step}</h3>
                <p className="mt-3 text-small leading-relaxed text-fg-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
