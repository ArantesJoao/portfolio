/* eslint-disable react/no-unescaped-entities */
import { Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div className="w-full h-full bg-purple-500 px-[17%] py-[3%]">
      <div className="flex flex-row justify-between">
        <div>
          <p className={
            `${sora.className} text-h5-sora text-neutral-50 font-bold`
          }>Let's talk!</p>
          <p className="text-p-d18 text-neutral-50">
            E-mail me or hit me up at LinkedIn if you have some question or want to work with me!
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-5">
            <Image
              src="assets/black_github.svg"
              alt="João Arantes GitHub"
              width={44}
              height={44}
              priority
            />
            <Image
              src="assets/black_linkedin.svg"
              alt="João Arantes LinkedIn"
              width={44}
              height={44}
            />
            <Image
              src="assets/black_email.svg"
              alt="João Arantes E-mail"
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;