"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    })
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {showScrollToTop && (
        <div onClick={scrollUp} className="fixed bottom-14 right-14">
          <Image
            src="assets/arrow_up.svg"
            alt="João Arantes GitHub"
            width={44}
            height={44}
          />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;