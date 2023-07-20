import Hero from './components/Hero'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import Header from './components/Header'
import Container from './components/Container'
import ScrollToTop from './components/ScrollToTopFloat'
import AboutMeSection from './components/AboutMeSection'
import ProjectsSession from './components/ProjectsSection'

export default function Home() {
  return (
    <>
    <Container>
        <div className='flex flex-col gap-0 md:gap-44 scroll-smooth'>
          <Header />
          <Hero />
          <Scroll />
          <ProjectsSession />
          <AboutMeSection />
        </div>
    </Container>
      <ScrollToTop />
      <Footer />
    </>
  )
}
