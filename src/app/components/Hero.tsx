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
            <div
                id="hero"
                className="
          flex
          flex-col
          gap-3
          md:gap-12
          lg:items-center
          items-start
          mt-8
          lg:mt-0
          pt-24
          lg:pt-0"
            >
                <p
                    className={
                        `${sora.className}
            text-5xl leading-[4rem]
            font-bold
            text-neutral-800
            text-left
            lg:text-center
          `}>
                    Hi, I'm João Víctor Arantes
                </p>
                <p
                    className={`
          ${sora.className}
          text-h4-sora
          text-purple-900
          font-bold
          lg:self-center
        `}>
                    Front-End Developer
                </p>
                <p
                    className="
            flex
            text-p-d18
            md:text-p-r24
            text-neutral-700
            lg:text-center
            max-w-[85%]
            text-left
            lg:self-center
          ">
                    Front-End developer and graduated with a Bachelor of Information Systems from the Federal University of Santa Catarina. Passionate about front-end design and backed by five years of market experience. Creating user experiences that resonate and engage.
                </p>
                <div className="flex flex-row gap-6 lg:self-center" >
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
                    <a href="mailto:arantesjoaov@gmail.com">
                        <Button label="GET IN TOUCH" outline />
                    </a>
                    <div className="hidden md:block">
                        <a href="https://drive.google.com/file/d/1RpcYfjADBWC3eCHcz3dMvJEkCtvwM91j/view?usp=sharing" target="_blank">
                            <Button label="RESUME" />
                        </a>
                    </div>
                </div>
            </div>
        </Container >
    );
}

export default Hero;