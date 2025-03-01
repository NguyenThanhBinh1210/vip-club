import bannerPC from '~/assets/the-sands-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/the-sands-collection-masthead-mobile.avif'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'


import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScreenSize from '~/hooks/useScreenSize'

const Lifestyle = () => {
  const screenSize = useScreenSize()
  const dataMembership = [
    {
      img: weekdayVacationTile,
      title: 'Lifestyle',
      content: (
        <>
          <li>Free to join</li>
          <li>30% off tickets to attractions and ArtScience Museum exhibitions</li>
          <li>Earn 20% Resort Dollars on public self-parking fees</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: 'Prestige',
      content: (
        <>
          <li>S$5,000 to upgrade</li>
          <li>Complimentary tickets to attractions and 1-for-1 tickets to ArtScience Museum exhibitions</li>
          <li>10% savings on hotel room rate</li>
          <li>Self-parking privilege redeemable at $4 Resort Dollars with same-day spend</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: 'Elite',
      content: (
        <>
          <li>S$50,000 to upgrade</li>
          <li>Complimentary tickets to attractions and ArtScience Museum exhibitions</li>
          <li>15% savings on hotel room rate & exclusive check-in at Sands Lounge</li>
          <li>Complimentary self-parking with same-day spend</li>
          <li>Exclusive invitations to celebrity events</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: 'PAIZA',
      content: (
        <>
          <li>S$500,000 to upgrade</li>
          <li>Complimentary tickets to attractions and ArtScience Museum exhibitions</li>
          <li>20% savings on hotel room rate & exclusive check-in at Sands Lounge</li>
          <li>Complimentary self-parking and valet parking</li>
          <li>Access to Paiza Concierge and exclusive invitations to celebrity events, shopping, dining and entertainment experiences</li>
        </>
      )
    },

  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt='bannerMobile'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>Let's Vip LifeStyle</h1>
          <p className='text-center text-[16px] mb-4'>
            Unlock a world of exclusive rewards and perks with your complimentary Sands LifeStyle membership,
            Singapore's most generous rewards programme.
          </p>

          <Link to='/signup'>
            <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
              Sign up
            </button>
          </Link>
          <p className='text-center text-[16px] mb-4'>
            Already a member?{' '}
            <Link to='/login' className='text-black underline'>
              Sign in
            </Link>
          </p>
          <p className='text-center text-[16px] mb-4'>Are you a tourist? Discover your exclusive privileges.</p>
        </div>
      </div>
      <div className='py-20  overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>MEMBERSHIP TIERS</h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative '>
          <button
            onClick={() => {
              if (screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl') {
                if (currentIndex < dataMembership.length - 3) {
                  setCurrentIndex(currentIndex + 1)
                }
              }
              if (screenSize === 'sm') {
                if (currentIndex < dataMembership.length - 1) {
                  setCurrentIndex(currentIndex + 1)
                }
              }
            }}
            className={`${screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl' ? currentIndex === dataMembership.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100' : currentIndex === dataMembership.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              } absolute hover:bg-gray-200 transition-all duration-300 z-10 right-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
          >
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
              className='lucide lucide-chevron-right'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </button>
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1)
              }
            }}
            className={`${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              } absolute hover:bg-gray-200 transition-all duration-300 z-10 left-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
          >
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
              className='lucide lucide-chevron-right rotate-180'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </button>
          <div
            style={{ transform: `translateX(-${(978 / 3) * currentIndex}pt)` }}
            className='w-max transition-all duration-300 flex gap-x-10'
          >
            {dataMembership.map((item, index) => (
              <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
                <div>
                  <img src={item.img} alt='weekdayVacationTile' />
                </div>
                <p className='text-xl  uppercase my-5'>{item.title}</p>
                <div className='text-[#333333] space-y-1'>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Lifestyle
