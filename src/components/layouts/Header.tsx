import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/6170305031849493246 (1).jpg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation().pathname
  const [bgColor, setBgColor] = useState('transparent')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState('')
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsNavOpen('')
    if (location !== '/booking') {
      setBgColor(
        !isMenuOpen ? 'linear-gradient(180deg,#ffffff,#ffffff)' : 'linear-gradient(180deg,rgba(0,0,0,.6),transparent)'
      )
    }
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    if (location === '/booking') {
      setBgColor('linear-gradient(180deg,#ffffff,#ffffff)')
    } else {
      let lastScrollY = window.scrollY
      setBgColor('linear-gradient(180deg,rgba(0,0,0,.6),transparent)')

      const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY) {
          // Nếu cuộn xuống
          if (isMenuOpen) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
          setBgColor('linear-gradient(180deg,#ffffff,#ffffff)')
        } else {
          // Nếu cuộn lên
          setIsVisible(true)
          if (currentScrollY < 600) {
            setBgColor('linear-gradient(180deg,rgba(0,0,0,.6),transparent)')
          } else {
            setBgColor('linear-gradient(180deg,#ffffff,#ffffff)')
          }
        }

        lastScrollY = currentScrollY
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full py-[11px] px-[30px] grid grid-cols-3 transition-all ease-in-out duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'
          }`}
        style={{
          backgroundImage: bgColor,
          boxShadow: bgColor === 'linear-gradient(180deg,#ffffff,#ffffff)' ? '0 4px 8px 0 rgba(0,0,0,.16)' : 'none'
        }}
      >
        <div className='flex items-center gap-2 '>
          <button
            onClick={toggleMenu}
            style={{
              color: bgColor === 'linear-gradient(180deg,#ffffff,#ffffff)' ? '#000' : '#fff'
            }}
            className='flex items-center gap-2 uppercase hover:opacity-65 transition-all duration-300'
          >
            {isMenuOpen ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-x'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
                Close
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-menu size-5 rotate-90'
                >
                  <line x1='4' x2='20' y1='12' y2='12' />
                  <line x1='4' x2='20' y1='6' y2='6' />
                  <line x1='4' x2='20' y1='18' y2='18' />
                </svg>
                Menu
              </>
            )}
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <Link to={'/'}>
            <img className='h-[38px] w-[38px] rounded-full' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='flex items-center gap-2 justify-end'>
          <Link to={'/booking'} className='uppercase'>
            <button
              className={`uppercase hover:opacity-65 transition-all duration-300 border  px-4 py-2 ${bgColor === 'linear-gradient(180deg,#ffffff,#ffffff)' ? 'border-black' : 'border-white text-white'
                }`}
            >
              Reserve
            </button>
          </Link>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white bg-opacity-70 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed left-0 top-0 bg-[#f0f1eb] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
      >
        <div className='py-[40px] px-[60px]'>
          <div className='space-y-8'>
            <button onClick={() => setIsNavOpen('stay')} className={` flex items-center gap-4 uppercase group `}>
              Stay{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <button onClick={() => setIsNavOpen('shop')} className={` flex items-center gap-4 uppercase group `}>
              Shop{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <button onClick={() => setIsNavOpen('dine')} className={` flex items-center gap-4 uppercase group `}>
              Dine{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <button onClick={() => setIsNavOpen('seedo')} className={` flex items-center gap-4 uppercase group `}>
              See & Do{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <Link onClick={toggleMenu} to={'/expo'} className={` flex items-center gap-4 uppercase group `}>
              What's On
            </Link>
            <button onClick={() => setIsNavOpen('paiza')} className={` flex items-center gap-4 uppercase group `}>
              Paiza{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <button onClick={() => setIsNavOpen('Rewards')} className={` flex items-center gap-4 uppercase group `}>
              Rewards
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            {/* <Link onClick={toggleMenu} to={'/expo'} className={` flex items-center gap-4 uppercase group `}>
              Expo and Convention{' '}
            </Link> */}
            <Link onClick={toggleMenu} to={'/more'} className={` flex items-center gap-4 uppercase group `}>
              More
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'stay' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Rooms & Suites</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/hotel/the-sands-collection'} className='hover:opacity-65'>
                The Sands Collection
              </Link>
              <Link onClick={toggleMenu} to={'/hotel/the-paiza-collection'} className='hover:opacity-65'>
                The Paiza Collection
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Online Exclusive</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/hotel/packages'} className='hover:opacity-65'>
                Stay Packages
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Experiences</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/attractions/skypark-observation-deck'} className='hover:opacity-65'>
                SkyPark Observation Deck
              </Link>
              <Link onClick={toggleMenu} to={'/attractions/infinity-pool'} className='hover:opacity-65'>
                SkyPark Infinity Pool
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Guest Privileges
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'shop' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/shopping'} className='hover:opacity-65'>
                The Shoppes
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Browse by category</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                Women's Fashion
              </Link>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                Men's Fashion
              </Link>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                Jewellery
              </Link>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                Watches
              </Link>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                Lifestyle & Gifts
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/shopping/store-directory'} className='hover:opacity-65'>
                View all stores
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'dine' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/restaurants'} className='hover:opacity-65'>
                Restaurants & Bars
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/restaurants/rooftop-dining'} className='hover:opacity-65'>
                Rooftop Dining
              </Link>
              <Link
                onClick={toggleMenu}
                to={'/guides/party-drinks-mbs/waterfront-bars-marina-bay'}
                className='hover:opacity-65'
              >
                Waterfront Dining
              </Link>
              <Link onClick={toggleMenu} to={'/restaurants/fine-dining'} className='hover:opacity-65'>
                Fine Dining
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Private Dining
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Social Hour
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                View all restaurants
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                View all bars and nightclubs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'seedo' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                See & Do
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Attractions</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                ArtScience Museum
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                SkyPark Observation Deck
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Digital Light Canvas
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Spectra – A Light & Water Show
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Sampan Rides
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Entertainment</p>

            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Shows & Concerts
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>Nightlife</p>

            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Marquee Nightclub
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                View all Bars and Nightclubs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'paiza' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Paiza
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                The Paiza Collection
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Paiza Sky Residence
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Paiza One
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Paiza Golf
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Paiza Wine
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'Rewards' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >
        <div onClick={() => setIsNavOpen('')} className='lg:hidden absolute top-[4.5rem] left-10 uppercase text-sm flex items-center gap-2 cursor-pointer hover:opacity-65 transition-all duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
          Back to Menu
        </div>
        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Sands LifeStyle
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Membership Tiers
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Members Perks
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                Sands Alliance Privileges
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                View all Sands Outlets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
