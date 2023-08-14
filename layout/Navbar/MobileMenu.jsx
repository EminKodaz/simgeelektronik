import React from 'react'
import { BsListUl } from 'react-icons/bs'

function MobileMenu({ toggle, setToggle }) {

    const handleClick = () => {
        setToggle(!toggle)
        console.log(toggle, "gello")
    }

    return (
        <button className='hidden max-lg:flex  items-center ' onClick={handleClick}>
            <BsListUl size={38} className='text-zinc-700' />
        </button>
    )
}

export default MobileMenu