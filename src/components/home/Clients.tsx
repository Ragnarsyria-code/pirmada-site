import Image from 'next/image'

import chaos from '@/assets/clients/chaos.svg'
import ib from '@/assets/clients/ib.svg'
import penta from '@/assets/clients/penta.svg'
import pixel from '@/assets/clients/pixel.svg'
import sci from '@/assets/clients/sci.svg'
import sync from '@/assets/clients/sync.svg'
import Reveal from '@/components/motion/Reveal'

const clients = [
  { name: 'SciCast', logo: sci },
  { name: 'Penta Real Estate', logo: penta },
  { name: 'SYNC', logo: sync },
  { name: 'Pixel', logo: pixel },
  { name: 'CHAOS', logo: chaos },
  { name: 'IB', logo: ib },
]

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="section-y-sm border-t border-line">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
          <h2 id="clients-title" className="eyebrow shrink-0 md:w-48">
            Selected clients
          </h2>
          <ul className="grid flex-1 grid-cols-3 gap-y-8 sm:grid-cols-6" role="list">
            {clients.map((c) => (
              <li key={c.name} className="flex items-center justify-center md:justify-start">
                <Image
                  src={c.logo}
                  alt={c.name}
                  className="h-8 w-auto max-w-[110px] opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 md:h-9"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
