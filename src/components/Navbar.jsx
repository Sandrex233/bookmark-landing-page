import React, { useState } from 'react'

import Logo from '../assets/logo-bookmark.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div>
            <div className='flex flex-row  justify-between items-center px-10 md:px-20 p-6'>

                <div>
                    <img src={Logo} alt="" />
                </div>

                <div className='flex flex-row space-x-6 '>
                    <ul className='hidden md:flex items-center justify-center space-x-10 tracking-wider mr-10 uppercase font-normal  text-[#252B46]'>
                        <li className='hover:text-[#FA5757] cursor-pointer'>Features</li>
                        <li className='hover:text-[#FA5757] cursor-pointer'>Pricing</li>
                        <li className='hover:text-[#FA5757] cursor-pointer'>Contact</li>
                    </ul>
                    <button className='hidden px-10 py-2 transition ease-in-out hover:text-[#FA5757] hover:bg-white border-2 border-[#FA5757] tracking-wider uppercase  font-normal text-white bg-[#FA5757]
                rounded-lg md:block'>Login</button>
                </div>

                <ul className={!nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-black text-white text-5xl pl-20 font-extralight flex flex-col justify-center items-start'}>

                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Features</li>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Pricing</li>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Resources</li>
                    <div className='border border-gray-300 w-2/4'></div>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Login</li>
                    <a href='/' className='md:hidden p-3 px-16 transition ease-in-out text-base text-white bg-[#2ACFCF]
                rounded-full font-medium block'>Sign Up</a>
                </ul>


                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars color='black' size={20} /> : <FaTimes color='white' size={20} />}
                </div>
            </div>

        </div >
    )
}

export default Navbar