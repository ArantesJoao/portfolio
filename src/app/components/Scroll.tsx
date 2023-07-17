import Image from "next/image";
import Container from "./Container";

const Scroll = () => {
  return (
    <Container>
      <a href="#" className="flex flex-col mt-625 items-center">
        <div className="text-neutral-500">Scroll</div>
        <Image
          src="assets/arrow_down.svg"
          alt="Scroll icon"
          width={44}
          height={44}
          priority
        />
      </a>
    </Container>
  );
}

export default Scroll;