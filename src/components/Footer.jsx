import React from 'react'

import logowhite from '../assets/logo-white.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'


const Footer = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col space-y-4 pt-5 md:pt-0 md:space-y-0 h-[250px] md:h-[90px] md:px-36 items-center justify-center  md:justify-between bg-[#252B46]'>
                <div className='flex md:space-x-6 flex-col md:flex-row space-y-4 md:space-y-0'>
                    <img src={logowhite} alt="" />
                    <ul className='flex items-center justify-center flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 tracking-wider md:mr-10 uppercase font-normal  text-[#9194A1]'>
                        <li className='hover:text-[#FA5757] md:ml-12 cursor-pointer'>Features</li>
                        <li className='hover:text-[#FA5757] cursor-pointer'>Pricing</li>
                        <li className='hover:text-[#FA5757] cursor-pointer'>Contact</li>
                    </ul>
                </div>


                <div className='flex space-x-12 pt-2 md:pt-0 justify-center'>
                    <img src={Facebook} alt="" className='hovered cursor-pointer' />
                    <img src={Twitter} alt="" className='hovered cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default Footer