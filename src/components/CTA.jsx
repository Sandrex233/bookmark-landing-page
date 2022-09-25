import React from 'react'

const CTA = () => {
    return (
        <div className='mt-20'>
            <div className='flex h-[300px] items-center justify-center bg-[#5368DF]'>
                <div className='flex flex-col mx-auto space-y-8'>
                    <h1 className='max-w-sm md:max-w-md text-3xl md:text-4xl font-bold text-white text-center'>Stay up-to-date with what we’re doing</h1>
                    <div className="flex items-center justify-center">
                        <button className='px-8 py-2 transition ease-in-out hover:text-[#FA5757] hover:bg-white border-2 border-[#FA5757] tracking-wider  font-normal text-white bg-[#FA5757]
                rounded-lg md:block'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA