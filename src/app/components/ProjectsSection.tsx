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
                        title="Genius"
                        description="This is an AI SaaS application using OpenAI and Replicate. It is fully functional, you can go ahead, create your own account through Clerk and even signup to the Pro plan via Stripe to test everything! (don't worry, you won't be charged, it's o test mode!)."
                        imageUrl="/assets/genius_landing_page.png"
                        technologies={['react', 'next', 'tailwind', 'stripe', 'shadcn', 'clerk', 'vercel']}
                        hasLiveDemo
                        gitHubUrl="https://github.com/ArantesJoao/genius"
                        liveDemoUrl="https://genius-joo-vctor-arantes-projects.vercel.app/"
                    />

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
                        title="Ignite Call"
                        description="Ignite Call allows users to book appointments with each other. These bookings are automatically added to your linked Google Calendar! Project developed on a Rocketseat Bootcamp."
                        imageUrl="https://raw.githubusercontent.com/ArantesJoao/ignite-call/main/.github/app-preview.png"
                        technologies={['react', 'next', 'stitches', 'vercel', 'prisma', 'mysql']}
                        hasLiveDemo
                        gitHubUrl="https://github.com/ArantesJoao/ignite-call"
                        liveDemoUrl="https://ignite-call-psi-peach.vercel.app"
                    />

                    <ProjectCard
                        title="Portfolio"
                        description="My portfolio listed in my portfolio. I'm trying to think of an Inception joke here."
                        imageUrl="https://raw.githubusercontent.com/ArantesJoao/portfolio/main/.github/initial_screen.png"
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