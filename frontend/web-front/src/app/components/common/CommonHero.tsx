import { Header } from "../top/header/Header"

export const CommonHero = () => {
  return (
    <section className="pt-12 h-full text-white">
      <div className="mx-auto mb-10 w-64">
          <img src="/main-image.jpg" alt="bg" objectFit="contain" className="w-full" />
      </div>
      <Header fixed={false} />
    </section>
  )
}