
import React, { useState } from 'react'
import MenuItems from './MenuItems'
import SocialIcons from './SocialIcons'
import MobileMenu from './MobileMenu'
import MobileMenuItems from './MobileMenuItems'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: "500"
})

function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`fixed backdrop-blur-sm w-full text-sm py-3 flex flex-col items-center z-10 font-bold ${poppins.className}`}>
      <div className='border flex justify-end max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]'>
        <Link className='bg-sky-700 text-white p-2 text-xs font-light rounded-lg' href="alarm-report">
          Alarm Raporları
        </Link>
      </div>
      <div className='flex  border-b pb-5 pt-3 justify-between max-lg:w-[95%] w-[75%] m-auto max-[1300px]:w-[95%]'>
        <Image src="/images/logo.png" className='w-32' width={2611} height={609} alt='simgeelektronik' />
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