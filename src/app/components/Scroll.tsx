"use client"

import Image from "next/image";
import Container from "./Container";

const Scroll = () => {
  const scrollUp = () => {
    const projectsSession = document.querySelector("#projects");

    if (projectsSession !== null) {
      const topPos = projectsSession.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
        behavior: "smooth"
      });
    }
  }

  return (
    <Container>
      <div onClick={scrollUp}>
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