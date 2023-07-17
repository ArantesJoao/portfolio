import Image from "next/image";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCsharp,
  SiVercel,
  SiNodedotjs
} from "react-icons/si";

import { Sora } from "next/font/google";
import { IconType } from "react-icons";
import Button from "./Button";

const sora = Sora({ subsets: ['latin'] })

interface ProjectCardProps {
  title: string
  imageUrl: string
  description: string
  technologies: string[]
  hasLiveDemo?: boolean
}

const techIcons: { [index: string]: IconType } = {
  react: SiReact,
  "react-native": SiReact,
  next: SiNextdotjs,
  js: SiJavascript,
  tailwind: SiTailwindcss,
  csharp: SiCsharp,
  nodejs: SiNodedotjs,
  vercel: SiVercel,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  hasLiveDemo
}) => {
  return (
    <div className=" flex flex-col w-[47%] border-[1px] border-neutral-200">
      {/* Image */}
      <div className="relative w-full">
        <Image
          alt="Project thumbnail"
          src={imageUrl}
          width={0}
          height={0}
          sizes="1000vw"
          className="w-full h-auto"
        />
      </div>
      {/* Details */}
      <div className="py-6 px-4 flex flex-col">
        <div className={`
            ${sora.className}
            text-h5-sora
            font-bold
            text-neutral-900
            mb-4
          `}>
          {title}
        </div>
        <div className=" text-neutral-600 text-p-s16 mb-5">{description}</div>
        {/* Technologies */}
        <div className="flex flex-row gap-6 mb-6">
          {technologies?.map((tech, i) => {
            const Icon = techIcons[tech]
            return Icon ? <Icon key={i} size={24} /> : null
          })}
        </div>
      </div>
      {/* Buttons */}
      <div
        className={`
            my-6 mx-4
            flex
            flex-row
            mt-auto
            gap-2
            text-p-m14
            bottom-0
            ${hasLiveDemo ? 'max-w-[50%]' : 'max-w-[25%]'}
          `}>
        <Button label="VIEW CODE" />
        {hasLiveDemo && <Button label="LIVE DEMO" outline />}
      </div>
    </div>
  );
}

export default ProjectCard;