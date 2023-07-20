import { PiWarningLight } from 'react-icons/pi'

const UnderDevelopmentTag = () => {
  return (
    <div className="flex flex-row items-center w-fit mt-[108px] border-[1px] border-orange-200 bg-orange-50 top-[108px] right-5 text-[#c7602b]
    gap-2 p-1 px-2 rounded-md">
      <PiWarningLight size={20} />
      <span>Portfolio under constant development</span>
    </div>
  );
}

export default UnderDevelopmentTag;