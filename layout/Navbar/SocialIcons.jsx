import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp } from "react-icons/bs"

function SocialIcons() {
    return (
        <ul className='text-white flex w-full justify-around items-center'>
            <li><Link className='hover:text-pink-500 transition-all duration-200' href="" ><BsInstagram size={24} /></Link></li>
            <li><Link className='hover:text-blue-500 transition-all duration-200' href="" ><BsFacebook size={24} /></Link></li>
            <li><Link className='hover:text-red-500 transition-all duration-200' href="" ><BsTiktok size={24} /></Link></li>
            <li><Link className='hover:text-emerald-500 transition-all duration-200' href="" ><BsWhatsapp size={24} /></Link></li>
        </ul>
    )
}

export default SocialIcons