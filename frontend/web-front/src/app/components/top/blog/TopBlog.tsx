import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons'

const blogs = [
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice1.jpg", alt: "voice1" },
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice2.jpg", alt: "voice2" },
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice3.jpg", alt: "voice3"},
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice1.jpg", alt: "voice1" },
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice2.jpg", alt: "voice2" },
  { href: "#", icon: faHome, title: "試合前日の体ケア", date: "2021年7月23日", src: "/voice3.jpg", alt: "voice3"},
]

export const TopBlog = () => {
  return (
    <div className="mx-auto pt-40 w-full text-slate max-w-4xl">
      <h2 className="text-4xl font-bold text-slate-700 text-center">
        ゆるふわ日記
      </h2>
      <div className="mt-24 max-w-4xl mx-auto justify-items-center grid gap-12 grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="w-5/6 flex flex-col text-slate-600">
            <img src={blog.src} alt={blog.alt} className="rounded-3xl h-40 shadow-md shadow-slate-600"/>
            <p className="pt-4 text-lg">{blog.title}</p>
            <p className="pt-2 text-sm">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}