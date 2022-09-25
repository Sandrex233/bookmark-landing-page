import React, { useState } from 'react'

import Logo from '../assets/logo-bookmark.svg'
import { FaBars, FaTimes } from 'react-icons/fa';
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import logowhite from '../assets/logo-white.svg'

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


                <ul
                    className={nav
                        ? 'md:hidden uppercase fixed left-0 top-0 flex flex-col space-y-6 items-center justify-center w-full h-screen bg-[#252B46] opacity-95 tracking-widest ease-in duration-300 z-10'
                        : 'hidden'}
                >
                    <img src={logowhite} alt="" className='fixed top-0 left-0 p-6 pl-10' />
                    <div className='border border-gray-700 w-2/4'></div>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Features</li>
                    <div className='border border-gray-700 w-2/4'></div>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Pricing</li>
                    <div className='border border-gray-700 w-2/4'></div>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Contact</li>
                    <div className='border border-gray-700 w-2/4'></div>
                    <a href='/' className='md:hidden p-2 px-20 transition ease-in-out text-base text-white border-gray-200 border-2
                rounded-md font-medium block'>LogIn</a>
                    <div className='flex space-x-5 pt-28'>
                        <img src={Facebook} alt="" onClick={handleClick} />
                        <img src={Twitter} alt="" onClick={handleClick} />
                    </div>
                </ul>


                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars color='black' size={20} /> : <FaTimes color='white' size={20} />}
                </div>
            </div>

        </div >
    )
}

export default Navbar