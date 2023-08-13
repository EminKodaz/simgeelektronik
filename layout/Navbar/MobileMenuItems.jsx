import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BiBookHeart, BiBriefcaseAlt2, BiDetail, BiHomeHeart, BiImages } from 'react-icons/bi';
import SocialIcons from './SocialIcons';


function MobileMenuItems({ toggle, setToggle }) {
  

    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <motion.div
            style={{
                opacity: toggle ? 1 : 0,
                overflow: "hidden",
                height: 0,
            }}
            animate={{
                opacity: toggle ? 1 : 0,
                height: toggle ? "auto" : 0,
            }}
            className="max-lg:flex hidden flex-col  w-full"
        >  <ul className='text-white flex w-full justify-around items-center flex-col  pb-5'>
                <li className=''>
                    <Link className='flex  items-center text-xl font-semibold m-2 hover:text-fuchsia-500 duration-150' onClick={handleClick} href="/#carousel" scroll={false}>
                        <BiHomeHeart size={22} className='mr-1' />Anasayfa
                    </Link>
                </li>
                <li>
                    <Link className='flex items-center text-xl font-semibold m-2 hover:text-fuchsia-500 duration-150' onClick={handleClick} href="/#aboutus" scroll={false}><BiDetail size={22} className='mr-1' /> Hakkımızda</Link>
                </li>
                <li>
                    <Link className='flex items-center text-xl font-semibold m-2 hover:text-fuchsia-500 duration-150' onClick={handleClick} href="/#services" scroll={false}> <BiBriefcaseAlt2 size={22} className='mr-1' /> Hizmetlerimiz</Link>
                </li>
                <li>
                    <Link className='flex items-center text-xl font-semibold m-2 hover:text-fuchsia-500 duration-150' onClick={handleClick} href="/#gallery" scroll={false}><BiImages size={22} className='mr-1' />Galeri</Link>
                </li>
                <li>
                    <Link className='flex items-center text-xl font-semibold m-2 hover:text-fuchsia-500 duration-150' onClick={handleClick} href="/#blog" scroll={false}><BiBookHeart size={22} className='mr-1' /> Blog</Link>
                </li>
                <li className='mt-5'>
                    <Link
                        className="px-3 font-semibold text-xl py-2 rounded-md transition-all duration-500 bg-gradient-to-br from-fuchsia-400 via-rose-900 to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
                        href="/#contactus" scroll={false} onClick={handleClick}>Bize Ulaşın</Link>
                </li>
            </ul >
            <div className='w-1/2 m-auto mt-5 pb-3'>
                <SocialIcons />
            </div>
        </motion.div>
    )
}

export default MobileMenuItems