import { useState } from 'react'
import { Link } from 'react-router-dom'
import Bokingbanner from '~/assets/banner-desktop (1).jpg'
import Bokingbanner2 from '~/assets/banner-desktop.jpg'
import { ButtonBlack } from './Shop/Shopping'

const ContactNow = () => {
  const [stage, setStage] = useState(1)
  return (
    <div className="px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto pt-[60px]">
      <div className='py-20'>
        <img src={Bokingbanner2} alt='Bokingbanner2' className='hidden md:block' />
        <img src={Bokingbanner} alt='Bokingbanner' className=' md:hidden w-full ' />
      </div>
      <h1 className='text-center text-4xl pb-20 uppercase'>Đặt chỗ & Liên hệ nhanh</h1>
      <div className='mb-10'>
        {stage === 1 && <div>
          <h2 className='text-3xl text-center uppercase mb-10'>ENTER ABOVE BEYOND</h2>
          <h2 className='text-center text-sm text-[#333333] mb-3'>
            Be the first to discover a curation of exclusive offers, upcoming events and indulgences at its finest at Let’s Win Club.

          </h2>
          <div className='bg-[#f0f1eb] border border-[#c5c6bc] md:grid grid-cols-2  mt-10 space-y-3 md:space-y-0 p-5 max-w-[700px] mx-auto gap-4 mb-10'>
            <input type='text' placeholder='Full Name' className=' p-2 border-b border-[#c5c6bc] ' />
            <input type='text' placeholder='Number phone' className=' p-2 border-b border-[#c5c6bc] ' />
          </div>
          <ButtonBlack onClick={() => setStage(2)} title='Submit' />
        </div>}
        {stage === 2 && (
          <div>
            <h2 className='text-3xl text-center uppercase mb-10'>Thank you for subscribing to our newsletter.</h2>
            <h2 className='text-center text-sm text-[#333333] mb-3'>
              Look forward to a thoughtful curation of content that showcases our love for everything
              extraordinary.
            </h2>
            <Link to={'/'} className='  text-center block underline text-[#333333]'>Back to home page</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactNow