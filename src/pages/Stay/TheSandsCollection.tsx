import bannerPC from '~/assets/the-sands-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/the-sands-collection-masthead-mobile.avif'
import sandsPremierRoom1 from '~/assets/sands-premier-room-1.avif'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'
import infinityMastheadMobile from '~/assets/infinity-masthead-mobile-1080x1440.webp'
import planYourVisitFamily from '~/assets/plan-your-visit-family.avif'
import oasis from '~/assets/A-PRIVATE-OASIS.avif'
import sandsLifestyle from '~/assets/sands-lifestyle.avif'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const TheSandsCollection = () => {
  const dataSlide = [1, 2, 3]
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
          <h1 className='uppercase text-[40px] text-center mb-10'>Let's Vip Collection</h1>
          <p className='text-center text-[16px] mb-4'>
            Our newly refreshed Sands Collection of rooms and suites are urban sanctuaries filled with thoughtful
            details and artful objet drawn from the finest in local and global design.
          </p>
          <p className='text-center text-[16px] mb-4'>
            In each room, a bespoke Armoire opens to unveil a generous spread of speciality teas, fine wines and treats
            from diverse cuisines. Connected to a spacious walk-in wardrobe, the spa-like bathroom with double vanities
            makes each daily ritual a pampering experience. Buffed calf leather, polished silver, book-matched marble
            floors and plush fabrics invite touch and reflect our shared passion for refined craftsmanship.
          </p>
          <p className='text-center text-[16px] mb-4'>
            Wake up to unrivalled views of Singapore’s cityscape, Gardens by the Bay or the sparkling sea. And enjoy
            exclusive access to our world-famous SkyPark Infinity Pool and expert-led wellness classes at Sands SkyPark.
          </p>
          <Link to='/booking'>
            <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
              Reserve now
            </button>
          </Link>
        </div>
      </div>
      <div className='py-20 bg-[#eef0eb] overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>Stay Packages</h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative '>
          <button
            onClick={() => {
              if (currentIndex < dataSlide.length - 3) {
                setCurrentIndex(currentIndex + 1)
              }
            }}
            className={`${currentIndex === dataSlide.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
            {dataSlide.map((_, index) => (
              <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
                <div>
                  <img src={weekdayVacationTile} alt='weekdayVacationTile' />
                </div>
                <p className='text-xl  uppercase my-5'>Weekday Escapade</p>
                <p className='text-[16px] text-[#333333] mb-10'>
                  Experience the newly restored Sands Premier Room, stylishly fitted with a deep soaking bathtub and
                  walk-in wardrobe. Begin each day with a sumptuous breakfast buffet, and take a dip in our world-famous
                  SkyPark Infinity Pool.
                </p>
                <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
                  Discover more
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='pt-10 mb-40'>
        <div className='px-4 lg:px-0 grid  md:grid-cols-2 gap-x-10 gap-y-40 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <div className='mb-5'>
                <img src={sandsPremierRoom1} alt='sandsPremierRoom1' />
              </div>
              <Link to='/' className='text-[20px] uppercase '>
                Sands Premier Room
              </Link>
              <div className='mb-5 flex items-center mt-2'>
                <p className='uppercase text-[16px] leading-4 border-r border-black pr-3 mr-3'>
                  Gardens by the Bay View
                </p>
                <p className='uppercase text-[16px] leading-4 text-[#c5c6bc] cursor-pointer'>City View</p>
              </div>
              <p className='mb-5  text-[#333333]'>
                Unwind in your elegant room and savour the generous curation of treasures in the bespoke Armoire. Expect
                beautifully appointed in-room amenities and two-person bathtub, along with separate vanities.
              </p>
              <ul className='flex flex-col  list-disc text-[#333333] pl-6 mb-20'>
                <li>45 sqm on average</li>
                <li>Up to 3 guests</li>
                <li>1 king or 2 queen beds</li>
              </ul>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>Included in your stay</h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative '>
          <button
            onClick={() => {
              if (currentIndex < dataSlide.length - 3) {
                setCurrentIndex(currentIndex + 1)
              }
            }}
            className={`${currentIndex === dataSlide.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
            {dataSlide.map((_, index) => (
              <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
                <div>
                  <img src={infinityMastheadMobile} alt='infinityMastheadMobile' />
                </div>
                <p className='text-xl  uppercase my-5'>Weekday Escapade</p>
                <p className='text-[16px] text-[#333333] mb-10'>
                  Experience the newly restored Sands Premier Room, stylishly fitted with a deep soaking bathtub and
                  walk-in wardrobe. Begin each day with a sumptuous breakfast buffet, and take a dip in our world-famous
                  SkyPark Infinity Pool.
                </p>
                <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
                  View details
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='px-4 lg:px-0 pb-20'>
        <h1 className='mt-4 text-center uppercase text-2xl lg:text-[32px]'>Plan Your Visit</h1>
        <div className='grid lg:grid-cols-4 gap-x-5 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          <div></div>
          <p className='text-center text-[16px] mb-4 col-span-2 mt-4'>
            Make the most out of your visit with a curated itinerary just for you. Whether you’re looking to unwind with
            friends, spend quality time with the family, or surprise your partner with a romantic getaway, our
            itineraries have everything you need for an unforgettable visit.
          </p>
          <div></div>
        </div>
        <p className='text-center text-[16px]  mt-10 font-medium mb-20'>SELECT AN OCCASION</p>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10'>
          <div className=''>
            <div className='mb-10'>
              <img src={planYourVisitFamily} alt='planYourVisitFamily' />
            </div>

            <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
              Family Outing
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
            </button>
          </div>
          <div className=''>
            <div className='mb-10'>
              <img src={planYourVisitFamily} alt='planYourVisitFamily' />
            </div>

            <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
              Family Outing
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
            </button>
          </div>
          <div className=''>
            <div className='mb-10'>
              <img src={planYourVisitFamily} alt='planYourVisitFamily' />
            </div>

            <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
              Family Outing
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
            </button>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>A PRIVATE OASIS BETWEEN WORLDS</h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Discover our new Sands Collection, which is intentionally crafted to feel inviting, generous and refined
                at every turn.
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Feel your cares melt away in our deeply calming, elegant guestrooms dressed in soothing earth tones,
                polished marble and brushed metal accents, each framing stunning vistas. A wealth of luxurious comforts
                along with specially co-created objets with skilful regional artisans — from Bynd Artisan’s supple,
                practical leather holders to Legle Asia’s sleek porcelainware — ensure a sophisticated, uniquely
                memorable stay.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                Discover more
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img className='mt-5 lg:mt-0 ' src={oasis} alt='oasis' />
            <div className='block lg:hidden'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Discover our new Sands Collection, which is intentionally crafted to feel inviting, generous and refined
                at every turn.
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Feel your cares melt away in our deeply calming, elegant guestrooms dressed in soothing earth tones,
                polished marble and brushed metal accents, each framing stunning vistas. A wealth of luxurious comforts
                along with specially co-created objets with skilful regional artisans — from Bynd Artisan’s supple,
                practical leather holders to Legle Asia’s sleek porcelainware — ensure a sophisticated, uniquely
                memorable stay.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>SANDS LIFESTYLE</h2>

            <img className='mt-5 lg:mt-0 ' src={sandsLifestyle} alt='sandsLifestyle' />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Make the most of your visit ― join the most generous rewards programme in Singapore. Earn unlimited
                rewards instantly as you shop, dine, play and stay at Let’s Win Club, and unlock greater privileges as
                you indulge.
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Our esteemed members enjoy priority access to highly sought-after events and restaurants, and exclusive
                invites to uniquely curated lifestyle experiences.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                Discover more
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>SANDS LIFESTYLE</h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Make the most of your visit ― join the most generous rewards programme in Singapore. Earn unlimited
                rewards instantly as you shop, dine, play and stay at Let’s Win Club, and unlock greater privileges as
                you indulge.
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Our esteemed members enjoy priority access to highly sought-after events and restaurants, and exclusive
                invites to uniquely curated lifestyle experiences.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                Discover more
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheSandsCollection
