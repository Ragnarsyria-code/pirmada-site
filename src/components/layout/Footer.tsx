import { Link } from 'next-view-transitions'

import { LogoMark } from '@/components/brand/Logo'
import TextReveal from '@/components/motion/TextReveal'
import { ButtonLink } from '@/components/ui/Button'
import { navLinks, site } from '@/content/site'
import { services } from '@/content/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Next step</p>
            <TextReveal
              as="h2"
              text="Have a product, a launch or a brand that deserves better? Let's talk."
              className="max-w-[16ch] text-h1"
            />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" variant="accent" size="lg" arrow>
                Start a project
              </ButtonLink>
              <a href={`mailto:${site.email}`} className="link-underline text-body-lg">
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5 lg:mt-14">
            <nav aria-label="Footer">
              <p className="eyebrow mb-5">Navigate</p>
              <ul className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-quiet text-[15px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow mb-5">Services</p>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/#services`} className="link-quiet text-[15px]">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow mb-5">Contact</p>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li>
                  <a href={`mailto:${site.email}`} className="link-quiet break-all">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="link-quiet">
                    {site.phone}
                  </a>
                </li>
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="link-quiet" target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-small text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-5 w-auto text-fg" />
            <span>© {year} {site.legalName}. All rights reserved.</span>
          </div>
          <p>Design & development studio · Working with clients worldwide</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-[2vw] pb-[1vw] font-sans text-[19.5vw] font-medium leading-[0.78] tracking-[-0.05em] text-fg/[0.035]"
      >
        PIRMADA
      </div>
    </footer>
  )
}
