import { Header } from "../top/header/Header"
import Image from 'next/image' // 追加

export const CommonHero = () => {
  return (
    <section className="pt-12 h-full text-white">
      <div className="mx-auto mb-10 w-64">
          {/* <img> を <Image> に変更し、必要な props を追加 */}
          <Image src="/main-image.jpg" alt="bg" layout="fill" objectFit="contain" />
      </div>
      <Header fixed={false} />
    </section>
  )
}