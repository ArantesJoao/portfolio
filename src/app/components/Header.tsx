import Image from 'next/image'

const Header = () => {
  return (
    <div
      className="
          flex
          self-center
          justify-between
          items-center
          w-4/5
          mt-5
        ">
      {/* Right Side */}
      <a href='#'>
        <Image
          src="assets/ja-logo.svg"
          alt="João Arantes Portfolio Logo"
          width={56}
          height={56}
          priority
        />
      </a>
      {/* Left Side */}
      <div className='flex gap-9 justify-between items-center text-p-d18'>
        <a href='#home' className="">Home</a>
        <a href='#projects' className="">Projects</a>
        <a href='#about-me' className="">About</a>
        <a href='#' className="">Resume</a>
        <button>
          <Image
            src="assets/sun.svg"
            alt="João Arantes Portfolio Logo"
            width={40}
            height={40}
            priority
            className='ml-4'
          />
        </button>
      </div>
    </div>
  );
}

export default Header;