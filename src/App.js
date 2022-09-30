import React, { useState } from "react";
import CTA from "./components/CTA";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is Bookmark?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.',
      open: false
    },
    {
      question: 'How can I request a new browser?',
      answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.',
      open: true
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum.',
      open: false
    },
    {
      question: 'What about other Chromium browsers?',
      answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="font-rubik">
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <div className="faqs">
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-4xl font-medium text-[#252B46] text-center inline'>Frequently Asked Questions</h1>
          <p className='max-w-sm md:max-w-lg py-4 font-normal text-gray-400 text-center'>Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.</p>
        </div>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
