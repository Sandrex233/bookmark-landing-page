import React from 'react'

import Chrome from '../assets/logo-chrome.svg'
import Firefox from '../assets/logo-firefox.svg'
import Opera from '../assets/logo-opera.svg'

const Extension = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-4 mt-32 flex flex-col justify-center w-full h-full'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-4xl font-medium text-[#252B46] text-center inline'>Download the extension</h1>
                <p className='max-w-sm md:max-w-lg py-4 font-normal text-gray-400 text-center'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center text-center space-x-4 py-8'>
                <div className='py-7 mb-10'>
                    <img src={Chrome} alt="" className='mx-auto rounded-full w-45' />
                    <h1 className='max-w-md text-2xl font-medium text-[#252B46] text-center mt-6 mb-2'>Add to Chrome</h1>
                    <p className='max-w-sm  mx-auto md:mx-0 text-center pb-12 text-gray-400 '>Minimum version 62</p>
                    <a href='/' className='p-3  px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>Add & Install Extension</a>
                </div>
                <div className=' py-7 mb-10 md:mt-12'>
                    <img src={Firefox} alt="" className='mx-auto  rounded-full w-35' />
                    <h1 className='max-w-md text-2xl font-medium text-[#252B46] text-center mt-6 mb-2'>Add to Firefox</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center pb-12 text-gray-400 '>Minimum version 55</p>
                    <a href='/' className='p-3  px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>Add & Install Extension</a>
                </div>
                <div className='py-7 mb-10 md:mt-24'>
                    <img src={Opera} alt="" className='mx-auto rounded-full w-35' />
                    <h1 className='max-w-md text-2xl font-medium text-[#252B46] text-center mt-6 mb-2'>Add to Opera</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center pb-12 text-gray-400 '>Minimum version 46</p>
                    <a href='/' className='p-3  px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>Add & Install Extension</a>
                </div>

            </div>
        </div>
    )
}

export default Extension