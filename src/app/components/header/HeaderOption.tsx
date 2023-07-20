"use client"

import scrollTo from "@/utils";

interface HeaderOptionProps {
  title: string,
  div: string
}

const HeaderOption: React.FC<HeaderOptionProps> = ({ title, div }) => {
  return (
    <div onClick={() => scrollTo(div)} className="cursor-pointer">
      <p>{title}</p>
    </div>
  );
}

export default HeaderOption;