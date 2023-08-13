import Link from 'next/link'
import React from 'react'
import { BiBookHeart, BiBriefcaseAlt2, BiDetail, BiHomeHeart, BiImages } from "react-icons/bi"

function MenuItems() {

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ul className='text-white flex w-[60%] justify-around items-center max-lg:hidden'>
            <li >
                <Link className='flex items-center hover:text-fuchsia-500 duration-150' href="/" onClick={scrollToTop} scroll={false}><BiHomeHeart size={22} className='mr-1' />Anasayfa</Link>
            </li>
            <li>
                <Link className='flex items-center hover:text-fuchsia-500 duration-150' href="/#aboutus" scroll={false}><BiDetail size={22} className='mr-1' /> Hakkımızda</Link>
            </li>
            <li>
                <Link className='flex items-center hover:text-fuchsia-500 duration-150' href="/#services" scroll={false}> <BiBriefcaseAlt2 size={22} className='mr-1' /> Hizmetlerimiz</Link>
            </li>
            <li>
                <Link className='flex items-center hover:text-fuchsia-500 duration-150' href="/#gallery" scroll={false}><BiImages size={22} className='mr-1' />Galeri</Link>
            </li>
            <li>
                <Link className='flex items-center hover:text-fuchsia-500 duration-150' href="/#blog" scroll={false}><BiBookHeart size={22} className='mr-1' /> Blog</Link>
            </li>
            <li className=''>
                <Link
                    className="px-3 py-2 rounded-md transition-all duration-500 bg-gradient-to-br from-fuchsia-400 via-rose-900 to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
                    href="/#contactus" scroll={false}>Bize Ulaşın</Link>
            </li>
        </ul >
    )
}

export default MenuItems