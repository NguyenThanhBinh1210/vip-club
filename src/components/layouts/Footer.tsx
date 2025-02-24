import footerLogo from '~/assets/Logo_Wordmark.svg'
import mbsAppStore from '~/assets/mbs-app-store.avif'
import mbsGooglePlay from '~/assets/mbs-google-play.avif'
import mbsFacebook from '~/assets/facebook.svg'
import mbsInstagram from '~/assets/instagram.svg'
import mbsTwitter from '~/assets/twitter.svg'
import mbsYoutube from '~/assets/youtube.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768) // Kiểm tra kích thước màn hình

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <div className='flex justify-between cursor-pointer' onClick={() => !isMdScreen && setIsOpen(!isOpen)}>
        <p className='mb-4 text-[#333333]'>{title}</p>
        <button className='text-[#333333] md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={`lucide lucide-chevron-down transition-all duration-500 size-4 ${isOpen ? '-rotate-180' : ''}`}
          >
            <path d={'m6 9 6 6 6-6'} />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-col gap-y-2 md:gap-y-1 text-xs md:text-sm uppercase transition-all duration-500 overflow-hidden ${isMdScreen ? 'max-h-[400px]' : (isOpen ? 'max-h-[400px]' : 'max-h-[0px]')}`}
      >
        {children}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='bg-[#c5c6bc] pt-20 pb-10'>
      <div className='px-4 lg:px-20 2xl:mx-[180px] 2xl:px-0'>
        <img src={footerLogo} alt='footerLogo' className='mx-auto mb-20' />
        <div className='grid md:grid-cols-4 gap-x-10 gap-y-8 mb-20 '>
          <div>
            <Accordion title='Get to know us'>
              <Link to={'/'}>Company information</Link>
              <Link to={'/'}>Careers</Link>
              <Link to={'/'}>FAQ</Link>
              <Link to={'/'}>Contact us</Link>
              <Link to={'/'}>Awards & Accolades</Link>
            </Accordion>
          </div>
          <div>
            <Accordion title='Useful information'>
              <Link to={'/'}>Travel guide</Link>
              <Link to={'/'}>Plan your visit</Link>
              <Link to={'/'}>Getting here</Link>
              <Link to={'/'}>Services & amenities</Link>
              <Link to={'/'}>Hotel & flight packages</Link>
            </Accordion>
          </div>
          <div className='text-[#333333]'>
            <p className='mb-4'>Download our app</p>
            <div className='flex md:flex-col 2xl:flex-row gap-x-2'>
              <Link to={'/'}>
                <img src={mbsAppStore} alt='mbsAppStore' className='h-[2pc] w-[6pc] mb-2' />
              </Link>
              <Link to={'/'}>
                <img src={mbsGooglePlay} alt='mbsGooglePlay' className='h-[2pc] w-[78pt]' />
              </Link>
            </div>
            <p className='mb-4 mt-6'>Connect with us</p>
            <div className='flex gap-[15px]'>
              <Link to={'/'}>
                <img src={mbsInstagram} alt='mbsInstagram' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsFacebook} alt='mbsFacebook' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsTwitter} alt='mbsTwitter' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsYoutube} alt='mbsYoutube' className='h-[17px] w-[17px]' />
              </Link>
            </div>
          </div>
          <div className='text-[#333333]'>
            <p className='mb-4'>Get inspired</p>
            <p className='text-sm'>Subscribe to our newsletter for the latest updates</p>
            <button className='mt-4 px-5 py-2 border border-black hover:opacity-60 transition-all duration-300'>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className='max-w-[17pc] mx-auto text-[11px] uppercase flex flex-wrap justify-center '>
          <Link to={'/'} className='border-r border-black pr-4 mr-4'>
            Trademark Notice
          </Link>
          <Link to={'/'}>Privacy Notice</Link>
          <Link to={'/'} className='border-r border-black pr-4 mr-4 mt-3'>
            Security Advisory
          </Link>
          <Link to={'/'} className='mt-3'>
            Terms of Use
          </Link>
        </div>
        <div className='max-w-[17pc] mx-auto text-[11px] flex flex-wrap justify-center mt-4 text-[#333333]'>
          © 2025 Let’s Win Club. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
