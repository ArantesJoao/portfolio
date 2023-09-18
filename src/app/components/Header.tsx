"use client"

import Image from 'next/image'
import HeaderOption from './header/HeaderOption';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'
import MobileNavbarOption from './header/MobileNavbarOption';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // this is to control the time for the animation to complete
  const [shouldRender, setShouldRender] = useState(false)

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setShouldRender(false), 500);
  }

  const handleOpenMenu = () => {
    setShouldRender(true);
    setMenuOpen(true);
  }

  return (
    <>
      <div className="
        self-center
        justify-between
        items-center
        w-4/5
        mt-5
        hidden
        lg:flex
      ">
        {/* Right Side */}
        <Image
          src="assets/ja-logo.svg"
          alt="João Arantes Portfolio Logo"
          width={56}
          height={56}
          priority
        />
      {/* Left Side */}
      <div className='flex gap-9 justify-between items-center text-p-d18'>
          <HeaderOption title='Home' div='hero' />
          <HeaderOption title='Projects' div='projects' />
          <HeaderOption title='About' div='about-me' />
          <a href='https://drive.google.com/file/d/1XM_OIHek42MRD52G1R1vleFqPNzORxcx/view?usp=sharing' target='_blank' className="">Resume</a>
        </div>
      </div>
      <div className={`
          lg:hidden
          flex
          w-full
          left-0
          items-center
          justify-between
          pt-8
          px-5
          md:pl-20
          md:pr-16
          pb-5 border-b-[1px] border-neutral-200
          bg-white
          fixed
          z-10
          ${menuOpen ? "slide-up" : "slide-down"}
        `}>
        <Image
          src="assets/ja-logo.svg"
          alt="João Arantes Portfolio Logo"
          width={56}
          height={56}
          priority
        />
        <FiMenu
          onClick={handleOpenMenu}
          className='cursor:pointer'
          size={24}
        />
      </div>

      {shouldRender && (
        <div
          className={`
            fixed
            right-0
            w-full
            md:w-2/5
            h-screen
            bg-white
            border-l-[1px]
            border-neutral-200
            p-6
            z-10
            flex
            flex-col
            lg:hidden
            ${menuOpen ? "slide-in-right" : "slide-out-right"}
          `}>
          <div className='flex flex-row w-full items-center justify-between px-2'>
            <Image
              src="assets/ja-logo.svg"
              alt="João Arantes Portfolio Logo"
              width={56}
              height={56}
              priority
            />
            <FiX onClick={handleCloseMenu} size={24} color='#262626' />
          </div>
          <div className='mt-3'>
            <MobileNavbarOption
              title='Home'
              div='hero'
              onCloseMenu={handleCloseMenu}
            />
            <MobileNavbarOption
              title='Projects'
              div='projects'
              onCloseMenu={handleCloseMenu}
            />
            <MobileNavbarOption
              title='About'
              div='about-me'
              onCloseMenu={handleCloseMenu}
            />
          </div>
          <hr className="border-t-[1px] border-neutral-200 my-3 w-4/5" />
          <div className="flex flex-row gap-4 mt-4">
            <div>
              <Image
                src="assets/black_github.svg"
                alt="João Arantes GitHub"
                width={38}
                height={38}
                priority
                onClick={() =>
                  window.open("https://github.com/ArantesJoao", '_blank')}
              />
            </div>
            <div>
              <Image
                src="assets/black_linkedin.svg"
                alt="João Arantes LinkedIn"
                width={38}
                height={38}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/joaovictorarantes/", '_blank')}
              />
            </div>
            <a href="mailto:arantesjoaov@gmail.com">
              <Image
                src="assets/black_email.svg"
                alt="João Arantes E-mail"
                width={38}
                height={38}
              />
            </a>
          </div>
        </div >
      )}
    </>
  );
}

export default Header;