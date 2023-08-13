
import React, { useState } from 'react'
import MenuItems from './MenuItems'
import SocialIcons from './SocialIcons'
import MobileMenu from './MobileMenu'
import MobileMenuItems from './MobileMenuItems'


function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed border-b backdrop-blur-sm w-full  py-3 flex flex-col items-center z-10">
      <div className='flex justify-between max-lg:w-[95%] w-[70%] m-auto max-[1300px]:w-[95%]'>
        <MenuItems />
        <div className='max-lg:hidden flex items-center w-[10%]'>
          <SocialIcons />
        </div>
        <MobileMenu toggle={toggle} setToggle={setToggle} />
      </div>
      <MobileMenuItems toggle={toggle} setToggle={setToggle} />
    </nav>
  )
}

export default Navbar