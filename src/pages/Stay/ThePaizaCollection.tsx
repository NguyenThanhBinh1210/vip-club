import bannerPC from '~/assets/paiza-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/paiza-collection-masthead-mobile.avif'
import sandsPremierRoom1 from '~/assets/sands-premier-room-1.avif'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'
import infinityMastheadMobile from '~/assets/infinity-masthead-mobile-1080x1440.webp'
import oasis from '~/assets/A-PRIVATE-OASIS.avif'
import sandsLifestyle from '~/assets/sands-lifestyle.avif'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ThePaizaCollection = () => {
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
          <h1 className='uppercase text-[40px] text-center mb-10'>THE PAIZA COLLECTION</h1>
          <p className='text-center text-[16px] mb-4'>
            Reserved for the most discerning, the Paiza Collection embodies the ultimate home away from home, with
            unmatched luxury, thoughtful detail and boundless artistry at every turn.
          </p>
          <p className='text-center text-[16px] mb-4'>
            From discreet entrances to lavish ensuite facilities, every aspect of our finest suite collection is
            designed for privacy and comfort. Host elegant parties in our opulent dining rooms, customise your suite
            with varied entertainment options and bask in spectacular views of Singapore’s cityscape and sparkling sea.
            Soothing eucalyptus timber, Italian Palisandro Blue marble, artisanal porcelain and silver accents and the
            finest handmade Savoir beds invite touch and ensure unrivalled comfort.
          </p>
          <p className='text-center text-[16px] mb-4'>
            Enjoy privileged access to Paiza Sky Residence, a private club lounge nestled atop our landmark hotel.
            Discover a world of rarified, insider experiences such as golf, wine tasting and yachting.
          </p>
          <p className='text-center text-[16px] mb-4'>
            Throughout your stay, our 24-hour butler team is on hand to anticipate your every wish, with a resolve to
            make anything possible.
          </p>
          <p className='text-center text-[16px] mb-4'>
            Welcome home to the Paiza Collection, a truly exceptional stay.
          </p>
          <Link to='/booking'>
            <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
              Reserve now
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-[#eef0eb] py-10'>
        <h2 className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto uppercase  text-2xl mb-10'>
          EXPERIENCE THE EXTRAORDINARY
        </h2>
        <div className='px-4 lg:px-0 grid lg:grid-cols-4 gap-x-10 gap-y-10 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          {[1, 2, 3, 4].map((_, index) => (
            <div className='' key={index}>
              <img src={weekdayVacationTile} alt='weekdayVacationTile' />
              <div>
                <p className='uppercase text-[16px] text-[#333333] py-4'>
                  Paiza VIP Arrival
                </p>
                <p className='text-[16px] text-[#333333]'>
                  Touch down to a warm welcome with our dedicated greeters. Arrive in our new VIP arrival lounge via a private driveway and lobby accessible only to Paiza guests.
                </p>
              </div>
            </div>
          ))}
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

      <div className='py-20 bg-[#eef0eb]'>
        <div className='pr-4  2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>The Paiza Experience</h2>

            <img className='mt-5 lg:mt-0 ' src={sandsLifestyle} alt='sandsLifestyle' />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Revel in the pinnacle of sophisticated living at the new Paiza Collection. Discover the extraordinary world of Paiza and enjoy a taste of the privileges within.
              </p>

              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>The Paiza Experience</h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Revel in the pinnacle of sophisticated living at the new Paiza Collection. Discover the extraordinary world of Paiza and enjoy a taste of the privileges within.

              </p>

              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>Discover Paiza</h2>
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

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>ABOVE ALL EXPECTATION
            </h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Perched on the highest floors of our iconic building, the Paiza Collection showcases breathtakingly grand yet serene interiors featuring lofty ceilings, luxuriantly plush furnishings and the finest materials, captivating artworks and superb views.


              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                An array of stunning objet co-created with top international artisans — such as Fromental’s stunning hand-painted silk wallcoverings, Zanetto’s jewel-like brass vessels and Legle Asia’s lotus-adorned porcelainware — beguile the eye at every turn, surrounding you with beauty.


              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                From elegant soirees to deep rest, even the tiniest details have been carefully finessed for your comfort and pleasure.

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
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                An array of stunning objet co-created with top international artisans — such as Fromental’s stunning hand-painted silk wallcoverings, Zanetto’s jewel-like brass vessels and Legle Asia’s lotus-adorned porcelainware — beguile the eye at every turn, surrounding you with beauty.


              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                From elegant soirees to deep rest, even the tiniest details have been carefully finessed for your comfort and pleasure.

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

export default ThePaizaCollection
