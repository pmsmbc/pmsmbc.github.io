import { About } from '@/widgets/about'
import { AiWorkflow } from '@/widgets/ai-workflow'
import { Contact } from '@/widgets/contact'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { ProjectGrid } from '@/widgets/project-grid'
import { WorkList } from '@/widgets/work-list'
import s from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <a href="#main" className={s.skip}>본문 바로가기</a>
      <Header />
      <main id="main" tabIndex={-1} className={s.main}>
        <div id="top" tabIndex={-1} />
        <Hero />
        <About />
        <AiWorkflow />
        <WorkList />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
