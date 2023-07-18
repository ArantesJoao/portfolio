import AboutMeSection from './components/AboutMeSection'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSession from './components/ProjectsSection'
import Scroll from './components/Scroll'
import ScrollToTop from './components/ScrollToTopFloat'

export default function Home() {
  return (
    <>
    <Container>
        <div className='flex flex-col gap-44 scroll-smooth'>
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
