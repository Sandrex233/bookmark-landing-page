import React from 'react'
import hero from '../assets/hero.svg'

const Hero = () => {
    return (
        <>
            <img src={hero} alt="" className='md:hidden flex mt-8' />
            <div className='flex justify-between items-center flex-row  mx-auto'>
                <div className='flex flex-col space-y-12 mb-12 px-6 mx-auto mt-20'>
                    <h1 className='max-w-md text-3xl md:text-4xl font-medium text-center text-[#252B46] md:text-left'>A Simple Bookmark Manager</h1>
                    <p className='max-w-sm text-center font-normal text-gray-500 md:text-left'>A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex justify-center items-center md:justify-start space-x-3">
                        <a href='/' className='p-3 px-5 text-xs md:text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>Get it on Chrome</a>
                        <a href='/' className='p-3 px-5 text-xs md:text-sm text-[#252B46] border-2 hover:border-[#252B46]
                rounded-md baseline shadow-md font-medium  transition ease-in-out'>Get it on Firefox</a>
                    </div>
                </div>
                <div>
                    <img src={hero} alt="" className='hidden md:flex' />
                </div>
            </div>
        </>

    )
}

export default Hero