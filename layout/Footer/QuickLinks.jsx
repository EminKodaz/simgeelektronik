
import Link from 'next/link'
import React from 'react'
import { BiBookHeart, BiBriefcaseAlt2, BiDetail, BiHomeHeart, BiImages } from 'react-icons/bi'

function QuickLinks() {
    return (
        <section className='mt-5 max-lg:mb-5'>
            <ul className='text-zinc-300 text-xl text-center'>
                <li >
                    <Link className='hover:text-fuchsia-500' href="/#carousel" scroll={false}>Anasayfa</Link>
                </li>
                <li >
                    <Link className='hover:text-fuchsia-500' href="/#aboutus" scroll={false}>Hakkımızda</Link>
                </li>
                <li >
                    <Link className='hover:text-fuchsia-500' href="/#services" scroll={false}>Hizmetlerimiz</Link>
                </li>
                <li >
                    <Link className='hover:text-fuchsia-500' href="/#gallery" scroll={false}>Galeri</Link>
                </li>
                <li >
                    <Link className='hover:text-fuchsia-500' href="/#contactus" scroll={false}>Blog</Link>
                </li>
            </ul >
        </section>
    )
}

export default QuickLinks