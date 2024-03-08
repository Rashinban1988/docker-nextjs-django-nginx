import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Header } from '../header/Header'

const images = [
  { src: "/voice1.jpg", alt: "voice1" },
  { src: "/voice2.jpg", alt: "voice2" },
  { src: "/voice3.jpg", alt: "voice3" },
]

export const TopHero = () => {
  return (
    <section className="pt-32 h-full text-white">
      <div className="mx-auto mb-12 w-96">
        <Image src="/main-image.jpg" alt="bg" layout="fill" objectFit="contain" />
      </div>
      <Header fixed={false} />
      <div className="mt-12 w-full max-w-6xl mx-auto grid gap-16 grid-cols-3">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} layout="responsive" width={700} height={394} className="shadow-md shadow-slate-600 rounded-[32px]" />
          </div>
        ))}
      </div>
    </section>
  )
}