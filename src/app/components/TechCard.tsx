import { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface TechCardProps {
  icon: IconType
  title: string
  color: string
}

const TechCard: FunctionComponent<TechCardProps> = ({ icon, title, color }) => {
  const Icon = icon
  return (
    <div className="w-16 h-16 mb-[5%]">
      <div className="flex flex-col gap-2 items-center">
        <Icon size={48} color={color} />
        <p className="text-p-s16 font-medium text-center">{title}</p>
      </div>
    </div>
  );
}

export default TechCard;

// {technologies?.map((tech, i) => {
//   const Icon = techIcons[tech]
//   return Icon ? <Icon key={i} size={24} /> : null
// })}