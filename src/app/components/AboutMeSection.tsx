/* eslint-disable react/no-unescaped-entities */
import { Sora } from "next/font/google";
import Container from "./Container";

const sora = Sora({ subsets: ['latin'] })

const AboutMeSection = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen mt-575">
        <div className="grid grid-cols-2">
          <div className="my-575 col-span-1 pr-24">
            <p className={
              `${sora.className}
            text-h4-sora
            font-bold
            text-black
            mb-7
          `}>Hey there!</p>
            <p className="text-p-r24">I'm a full-stack developer with three years of real-world professional experience and a deep love for frontend work. I'm finishing up my Information Systems degree at the Federal University of Santa Catarina in August, a journey that has further honed my coding skills.</p>
            <br />
            <p className="text-p-r24">In my professional life, I work with C# on the backend and a variety of JavaScript frameworks on the frontend. But I truly enjoy working with React, Next and Node.js the most. This portfolio, that was developed based on <a className="underline" target="_blank" href="https://www.figma.com/community/file/1257703789860932527">this project I discovered in the Figma community</a>, is a showcase of my projects, demonstrating a little bit of what I've learned so far and what I can bring to your team. I'm excited about the future and ready to take on new challenges in web development.</p>
          </div>
          <div className="my-575 col-span-1">
            <p className={
              `${sora.className}
                text-h4-sora
                font-bold
                text-black
                mb-7
                flex
                justify-center
            `}>Skills</p>

          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutMeSection;