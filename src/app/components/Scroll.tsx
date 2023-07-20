"use client"

import Image from "next/image";
import Container from "./Container";
import scrollTo from "@/utils";

const Scroll = () => {
  return (
    <Container>
      <div className="mt-16 md:mt-0 cursor-pointer animate-bounce" onClick={() => scrollTo('projects')}>
        <div className="text-neutral-500">Scroll</div>
        <Image
          src="assets/arrow_down.svg"
          alt="Scroll icon"
          width={44}
          height={44}
          priority
        />
      </div>
    </Container>
  );
}

export default Scroll;