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
          <img src="/main-image.jpg" alt="bg" objectFit="contain" className="w-full" />
      </div>
      <Header fixed={false} />
      <div className="mt-12 w-full max-w-6xl mx-auto grid gap-16 grid-cols-3">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="shadow-lg shadow-slate-600 rounded-xl w-full h-60 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}