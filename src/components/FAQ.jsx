import React from 'react'

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
        <>
            <div
                className={"faq " + (faq.open ? 'open' : '')}
                key={index}
                onClick={() => toggleFAQ(index)}
            >
                <div className="faq-question hover:text-[#FA5757] cursor-pointer">
                    {faq.question}
                </div>
                <div className="faq-answer tracking-normal text-base leading-loose  font-normal text-gray-500 text-left">
                    {faq.answer}
                </div>
            </div>
        </>




    )
}

export default FAQ