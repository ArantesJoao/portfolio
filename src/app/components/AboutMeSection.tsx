/* eslint-disable react/no-unescaped-entities */
import { Sora } from "next/font/google";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCsharp,
  SiVercel,
  SiNodedotjs,
  SiTypescript,
  SiDotnet,
  SiPrisma,
  SiBitbucket,
  SiJira,
  SiGithub,
  SiMongodb,
  SiPostman,
  SiInsomnia,
  SiFigma,
  SiVisualstudio,
  SiVisualstudiocode
} from "react-icons/si";

import Container from "./Container";
import TechCard from "./TechCard";

const sora = Sora({ subsets: ['latin'] })

const AboutMeSection = () => {
  return (
    <Container>
      <div id="about-me"
        className="flex items-center justify-center mb-[5%] pt-24 sm:mt-0
      ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 md:pr-24">
            <p className={
              `${sora.className}
            text-h4-sora
            font-bold
            text-black
            mb-400
          `}>Hey there!</p>
            <p className="lg:text-p-r24 text-lg">I'm a full-stack developer with three years of real-world professional experience and a deep love for frontend work. I'm finishing up my Information Systems degree at the Federal University of Santa Catarina in August, a journey that has further honed my coding skills.</p>
            <br />
            <p className="lg:text-p-r24 text-lg">In my professional life, I work with C# on the backend and a variety of JavaScript frameworks on the frontend. But I truly enjoy working with React, Next and Node.js the most. This portfolio, that was developed based on <a className="underline" target="_blank" href="https://www.figma.com/community/file/1257703789860932527">this project I discovered in the Figma community</a> (thank you to whom designed it!), is a showcase of my projects, demonstrating a little bit of what I've learned so far and what I can bring to your team. I'm excited about the future and ready to take on new challenges in web development.</p>
          </div>
          <div
            className="
              flex
              flex-col
              justify-between
              my-[10%]
              col-span-1
              sm:justify-normal
              md:justify-normal
              sm:gap-32
              md:gap-16
            ">
            <div>
              <p className={
                `${sora.className}
                text-h4-sora
                font-bold
                text-black
                flex
                lg:justify-center
                lg:text-center
                mt-8
                mb-400
            `}>Languages and Frameworks</p>
              <div
                className="
                  flex
                  flex-row
                  gap-10
                  lg:justify-center
                  flex-wrap
                  lg:px-[5%]
                ">
                <div>
                  <div className="flex flex-col gap-2 items-center">
                    <div>
                      <SiJavascript size={48} color="#F7E017" />
                      <div className="h-12 w-12 bg-black -mt-12"></div>
                    </div>
                    <p className="text-p-s16 font-medium">JavaScript</p>
                  </div>
                </div>
                <TechCard
                  color="#3178C5"
                  icon={SiTypescript}
                  title="TypeScript"
                />
                <TechCard
                  color="#90C63F"
                  icon={SiNodedotjs}
                  title="Node.js"
                />
                <TechCard
                  color="#68217A"
                  icon={SiCsharp}
                  title="C#"
                />
                <TechCard
                  color="#139ECA"
                  icon={SiReact}
                  title="React"
                />
                <TechCard
                  color="#139ECA"
                  icon={SiReact}
                  title="React Native"
                />
                <TechCard
                  color="black"
                  icon={SiNextdotjs}
                  title="Next.js"
                />
                <TechCard
                  color="#03B6D4"
                  icon={SiTailwindcss}
                  title="Tailwind"
                />
                <TechCard
                  color="#5D2993"
                  icon={SiDotnet}
                  title=".NET"
                />
                <TechCard
                  color="#black"
                  icon={SiPrisma}
                  title="Prisma"
                />

              </div>
            </div>
            <div>
              <p className={
                `${sora.className}
                text-h4-sora
                font-bold
                text-black
                flex
                lg:justify-center
                mb-400
                mt-8
                sm:mt-0
            `}>Tools</p>
              <div
                className="
                  flex
                  flex-row
                  gap-10
                  lg:justify-center
                  flex-wrap
                  lg:px-[5%]
                ">
                <TechCard
                  color="#027ACC"
                  icon={SiVisualstudiocode}
                  title="VSCode"
                />
                <TechCard
                  color="#67207B"
                  icon={SiVisualstudio}
                  title="Visual Studio"
                />
                <TechCard
                  color="#2684FF"
                  icon={SiBitbucket}
                  title="BitBucket"
                />
                <TechCard
                  color="#2684FF"
                  icon={SiJira}
                  title="Jira"
                />
                <TechCard
                  color="black"
                  icon={SiGithub}
                  title="Github"
                />
                <TechCard
                  color="#FF6C37"
                  icon={SiPostman}
                  title="Postman"
                />
                <TechCard
                  color="#4001BF"
                  icon={SiInsomnia}
                  title="Insomnia"
                />
                <TechCard
                  color="#48A538"
                  icon={SiMongodb}
                  title="MongoDB"
                />
                <TechCard
                  color="black"
                  icon={SiVercel}
                  title="Vercel"
                />
                <TechCard
                  color="#1E1E1E"
                  icon={SiFigma}
                  title="Figma"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutMeSection;