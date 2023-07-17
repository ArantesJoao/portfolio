'use client'

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { Sora } from "next/font/google";

import Container from "./Container";
import Button from "./Button";

const sora = Sora({ subsets: ['latin'] })

const Hero = () => {
  const onClickGitHub = () => {
    window.open("https://github.com/ArantesJoao", '_blank')
  }

  const onClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/joaovictorarantes/", '_blank')
  }

  return (
    <Container>
      <div className="flex flex-col gap-8 mt-625 items-center">
        <p
          className={
            `${sora.className}
            text-h3-sora
            font-bold
            text-neutral-800
          `}>
          Hi, I'm João Víctor Arantes
        </p>
        <p
          className={`
          ${sora.className}
          text-h4-sora
          text-purple-900
          font-bold
        `}>
          Full Stack Developer
        </p>
        <p className="flex text-p-r24 text-neutral-700 text-center max-w-[85%]">
          Full Stack Developer and (soon-to-be) Information Systems graduate from Federal University of Santa Catarina. Passionate about front-end design and backed by three years of market experience. Creating user experiences that resonate and engage.
        </p>
        <div className="flex flex-row gap-6" >
          <button onClick={onClickGitHub} className="flex-shrink-0">
            <Image
              src="assets/purple_github.svg"
              alt="João Arantes GitHub"
              width={44}
              height={44}
              priority
            />
          </button>
          <button onClick={onClickLinkedIn} className="flex-shrink-0">
            <Image
              src="assets/purple_linkedin.svg"
              alt="João Arantes LinkedIn"
              width={44}
              height={44}
              priority
            />
          </button>
          <Button label="GET IN TOUCH" outline />
          <Button label="RESUME" />
        </div>
      </div>
    </Container >
  );
}

export default Hero;