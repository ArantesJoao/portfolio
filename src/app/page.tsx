import AboutMeSection from './components/AboutMeSection'
import Container from './components/Container'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSession from './components/ProjectsSection'
import Scroll from './components/Scroll'

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Scroll />
      <ProjectsSession />
      <AboutMeSection />
    </Container>
  )
}
