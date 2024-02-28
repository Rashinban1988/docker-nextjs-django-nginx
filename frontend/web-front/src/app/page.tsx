import { Header } from '@/app/components/top/header/Header'
import { TopHero } from './components/top/hero/TopHero'
import { TopTreatment } from './components/top/treatment/TopTreatment'
import { TopBlog } from './components/top/blog/TopBlog'

export default function Home() {
  return (
    <>
      <Header fixed={true} />
      <main style={{ backgroundImage: "url('/bg.png')" }} className="bg-fixed min-h-screen">
        <TopHero />
        <TopTreatment />
        <TopBlog />
      </main>
    </>
  )
}