"use client"

/* eslint-disable react/no-unescaped-entities */
import { Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div
      className="
      w-full
      h-full
      bg-purple-500
      2xl:px-[17%]
      py-[5%]
      px-[5%]
      sm:py-[3%]
      md:px-[5%]
      lg:px-[7%]
      ">
      <div
        className="
          flex
          flex-col
          gap-6
          xl:gap-0
          xl:flex-row
          xl:items-center
          w-full
        ">
        <div>
          <p className={
            `${sora.className} text-h5-sora text-neutral-50 font-bold`
          }>Let's talk!</p>
          <p className="text-p-d18 text-neutral-50">
            E-mail me or hit me up at LinkedIn if you have some question or want to work with me!
          </p>
        </div>
        <div
          className="
            flex
            flex-col
            gap-6
            xl:gap-0
            xl:flex-row
            w-full
            justify-end
          ">
          <div className="flex flex-row gap-5">
            <div className="cursor-pointer">
              <Image
                src="assets/black_github.svg"
                alt="João Arantes GitHub"
                width={44}
                height={44}
                priority
                onClick={() =>
                  window.open("https://github.com/ArantesJoao", '_blank')}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="assets/black_linkedin.svg"
                alt="João Arantes LinkedIn"
                width={44}
                height={44}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/joaovictorarantes/", '_blank')}
              />
            </div>
            <a href="mailto:arantesjoaov@gmail.com">
              <Image
                src="assets/black_email.svg"
                alt="João Arantes E-mail"
                width={44}
                height={44}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;