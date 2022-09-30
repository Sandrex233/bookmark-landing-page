import React, { useState } from "react";
import tab1 from '../assets/illustration-features-tab-1.svg'
import tab2 from '../assets/illustration-features-tab-2.svg'
import tab3 from '../assets/illustration-features-tab-3.svg'


const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <div className='flex items-center justify-center flex-col mt-20'>
                <h1 className='text-4xl font-medium text-[#252B46] text-center inline'>Features</h1>
                <p className='max-w-sm md:max-w-lg py-4 font-normal text-gray-500 text-center'>Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>

            <div className='flex justify-between items-center flex-col mx-auto my-10'>
                <div className="flex flex-col md:flex-row">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Simple Bookmarking
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Speedy Searching
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Easy Sharing
                    </button>
                </div>

                <div className="grow">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <img src={tab1} alt="" className='md:hidden flex mt-8' />
                        <div className='flex justify-between  items-center md:flex-row mx-auto md:space-x-24'>
                            <div>
                                <img src={tab1} alt="" className='hidden md:flex' />
                            </div>
                            <div className='flex flex-col space-y-6 px-6 mx-auto mt-20'>
                                <h1 className='max-w-md text-3xl md:text-4xl font-medium text-center text-[#252B46] md:text-left'>Bookmark in one click</h1>
                                <p className='max-w-sm text-center font-normal text-gray-500 md:text-left'>Organize your bookmarks however you like. Our simple drag-and-drop interface
                                    gives you complete control over how you manage your favourite sites.</p>
                                <div className="hidden md:flex justify-center items-center md:justify-start space-x-3">
                                    <a href='/' className='p-3 px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <img src={tab2} alt="" className='md:hidden flex mt-8' />
                        <div className='flex justify-between  items-center md:flex-row mx-auto md:space-x-24'>
                            <div>
                                <img src={tab2} alt="" className='hidden md:flex' />
                            </div>
                            <div className='flex flex-col space-y-6 px-6 mx-auto mt-20'>
                                <h1 className='max-w-md text-3xl md:text-4xl font-medium text-center text-[#252B46] md:text-left'>Intelligent search</h1>
                                <p className='max-w-sm text-center font-normal text-gray-500 md:text-left'>Our powerful search feature will help you find saved sites in no time at all.
                                    No need to trawl through all of your bookmarks.</p>
                                <div className="hidden md:flex justify-center items-center md:justify-start space-x-3">
                                    <a href='/' className='p-3 px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <img src={tab3} alt="" className='md:hidden flex mt-8' />
                        <div className='flex justify-between  items-center md:flex-row mx-auto md:space-x-24'>
                            <div>
                                <img src={tab3} alt="" className='hidden md:flex' />
                            </div>
                            <div className='flex flex-col space-y-6 px-6 mx-auto mt-20'>
                                <h1 className='max-w-md text-3xl md:text-4xl font-medium text-center text-[#252B46] md:text-left'>Share your bookmarks</h1>
                                <p className='max-w-sm text-center font-normal text-gray-500 md:text-left'>Easily share your bookmarks and collections with others. Create a shareable
                                    link that you can send at the click of a button.
                                </p>
                                <div className="hidden md:flex justify-center items-center md:justify-start space-x-3">
                                    <a href='/' className='p-3 px-5 text-sm text-white bg-[#5368DF] hover:bg-white border-2 hover:border-[#5368DF] hover:text-[#5368DF]
                rounded-md baseline font-medium  transition ease-in-out'>More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};


export default Tab;