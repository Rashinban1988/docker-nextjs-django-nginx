import { Header } from '@/app/components/top/header/Header'
import { Hero } from './components/top/hero/Hero'
import { Treatment } from './components/top/treatment/Treatment'

export default function Home() {
  return (
    <>
      <Header fixed={true} />
      <main style={{ backgroundImage: "url('/bg.png')" }} className="bg-fixed min-h-screen">
        <Hero />
        <Treatment />
      </main>
    </>
  )
}