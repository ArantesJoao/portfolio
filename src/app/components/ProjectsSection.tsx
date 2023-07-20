import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ['latin'] })

const ProjectsSession = () => {
  return (
    <Container>
      <div id="projects" className="flex flex-col items-center pt-24 sm:mt-0">
        <p
          className={`
            ${sora.className}
            text-h3-sora
            font-bold
            text-neutral-800\
            mb-450
          `}>
          Projects
        </p>
        <div className="flex flex-row flex-wrap gap-16 justify-center">
          <ProjectCard
            title="Wild.io"
            description="This was my final college project! It fosters public engagement with city parks, encouraging the documentation of urban flora and fauna."
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/wild.io/main/.github/wild-io-banner.png"
            technologies={['react-native', 'nodejs']}
            gitHubUrl="https://github.com/ArantesJoao/wild.io"
          />

          <ProjectCard
            title="Airbnb clone"
            description="Airbnb clone I coded to showcase skills some of my full stack skills. It was also one of my first projects using Next 13."
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/airbnb-clone/main/.github/airbnb_clone_banner.png"
            technologies={['react', 'next', 'tailwind', 'vercel', 'nodejs']}
            hasLiveDemo
            gitHubUrl="https://github.com/ArantesJoao/airbnb-clone"
            liveDemoUrl="https://rent-website-clone-arantes.vercel.app"
          />

          <ProjectCard
            title="Portfolio"
            description="My portfolio listed in my portfolio. I'm trying to think of an Inception joke here."
            imageUrl="https://github.com/ArantesJoao/portfolio/blob/main/.github/initial_screen.png"
            technologies={['react', 'next', 'tailwind', 'vercel']}
            hasLiveDemo
            gitHubUrl="https://github.com/ArantesJoao/portfolio"
            liveDemoUrl="https://portfolio-arantesjoao.vercel.app"
          />
        </div>
      </div>
    </Container>
  );
}

export default ProjectsSession;