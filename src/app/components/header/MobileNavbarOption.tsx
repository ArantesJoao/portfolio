"use client"

import scrollTo from "@/utils";

interface MobileNavbarOptionProps {
  title: string,
  div: string,
  onCloseMenu: () => void
}

const MobileNavbarOption: React.FC<MobileNavbarOptionProps> = ({
  title,
  div,
  onCloseMenu
}) => {
  return (
    <div
      onClick={() => {
        scrollTo(div);
        onCloseMenu();  // Call close menu function here
      }}
      className="px-2 py-4 rounded-md hover:bg-purple-100
    ">
      <p>{title}</p>
    </div>
  );
}

export default MobileNavbarOption;