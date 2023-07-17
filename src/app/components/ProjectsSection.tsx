import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ['latin'] })

const ProjectsSession = () => {
  return (
    <Container>
      <div className="flex flex-col mt-625 items-center">
        <p
          className={`
            ${sora.className}
            text-h3-sora
            font-bold
            text-neutral-800 mb-575
          `}>
          Projects
        </p>
        <div className="flex flex-row flex-wrap gap-16 justify-center">
          <ProjectCard
            title="Wild.io"
            description="Final college project. Very nice app."
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/wild.io/main/.github/wild-io-banner.png"
            technologies={['react-native', 'nodejs']}
          />

          <ProjectCard
            title="Airbnb clone"
            description="Airbnb clone. Showcase skills lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/airbnb-clone/main/.github/airbnb_clone_banner.png"
            technologies={['react', 'next', 'tailwind', 'vercel', 'nodejs']}
            hasLiveDemo
          />

          <ProjectCard
            title="Filler"
            description="Just to occupy space temporarily."
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/airbnb-clone/main/.github/airbnb_clone_banner.png"
            technologies={['react', 'next', 'tailwind', 'vercel', 'nodejs']}
            hasLiveDemo
          />

          <ProjectCard
            title="Filler 2"
            description="Just to occupy space temporarily. But using more space to test the spacing under each project card! Making sure everything is fully responsive and won't leave any weird unwanted gaps."
            imageUrl="https://raw.githubusercontent.com/ArantesJoao/wild.io/main/.github/wild-io-banner.png"
            technologies={['react-native', 'nodejs']}
          />
        </div>
      </div>
    </Container>
  );
}

export default ProjectsSession;