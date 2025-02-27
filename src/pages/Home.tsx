
import bannerLandingModule3 from '~/assets/casino-landing-module-3-1920x1080.webp'

import hotram1 from '~/assets/Gaming-Salon-2048x1366.jpg'
import hotram2 from '~/assets/Casino-Slot-Angle-1-2_S.jpg'
import hoian from '~/assets/GHI0408-HDR-scaled.webp'
import hoian2 from '~/assets/hoian2.webp'
import hoian3 from '~/assets/hoian3.webp'
import hotrambanner from '~/assets/hotrambannerpc.png'
import rewardsClub from '~/assets/rewards-club.avif'
import { ButtonBlack } from './Shop/Shopping'
const Home = () => {
  return (
    <div>
      <div>
        <img
          src={hotrambanner}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
        // style={{ aspectRatio: '21/9' }}
        />
        <img
          src={hotrambanner}
          alt='hotrambanner'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div>
        <div className='pt-[160px] px-[33px]'>
          <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
            EXPERIENCE THE Let’s Win Club CASINO
          </h1>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>Sảnh VIP tại Hồ Tràm Casino</h2>
              <div className='hidden lg:block'>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  Get information on the general casino rules and conditions of entry.
                </p>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button></a>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={hotram1} alt='hotram1' />
              <div className='block lg:hidden'>
                <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>
                  Get information on the general casino rules and conditions of entry.
                </p>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <img
            // style={{ aspectRatio: '16/9' }}
            className='object-cover h-auto w-full'
            src={hotram2}
            alt='hotram2'
          />
        </div>
        <div className='pt-40 pb-20'>
          <div className='pl-4'>
            <h2 className='text-[25px] uppercase block lg:hidden'>Club Poker tại Danaciti</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 lg:w-[59pc] xl:w-[79pc] 2xl:w-[82pc] mx-auto'>
            <div>
              <img
                className='lg:pt-[15pc] mt-[2pc] lg:mt-0 object-cover aspect-[7/9] lg:aspect-[4.5/9]'
                src={hoian2}
                alt='hoian2'
              // style={{ aspectRatio: '4.5/9' }}

              />
            </div>
            <div>
              <img className='pt-[140pt] lg:pt-0' src={hoian3} alt='hoian3' />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <h2 className='text-[32px] mt-10 uppercase mb-4 hidden lg:block'>Club Poker tại Danaciti</h2>
              <div className='space-y-4 p-4 pr-[34px] lg:p-0'>
                <p>
                  The Casino at Let’s Win Club spans four luxurious levels, offering an unparalleled gaming
                  experience. With approximately 600 table games and 3,000 electronic gaming machines, players can enjoy
                  a vast selection of options catering to all preferences. The electronic gaming machines feature over
                  200 of the newest and most popular game titles, including video, reel, and multi-station games with
                  betting levels to suit every player. Many slots offer enticing jackpots, including linked Progressive
                  Jackpots that grow as games are played.
                </p>
                <a href='tel:0909090909'>
                  <ButtonBlack className='ml-0 mt-10' title='Liên hệ ngay' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>Khu VIP tại Hoiana</h2>
              <div className='hidden lg:block'>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>Find out more about our Events & Promotions.</p>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={hoian} alt='hoian' />
              <div className='block lg:hidden'>
                <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>
                  Find out more about our Events & Promotions.
                </p>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f0f1eb] py-16'>
          <h3 className='uppercase text-[25px] mb-4 pl-4 lg:hidden'>Exclusive Benefits With The Sands Rewards Club</h3>
          <div className=' gap-x-10 lg:grid-cols-3 grid 2xl:grid-cols-5'>
            <div className='lg:col-span-2 2xl:col-span-3'>
              <img src={rewardsClub} alt='rewardsClub' className='h-max w-max' />
            </div>
            <div className='lg:col-span-1 2xl:col-span-2 2xl:pr-[180px] pl-4 pr-[34px] lg:p-0'>
              <h3 className='uppercase text-[32px] hidden lg:block'>Exclusive Benefits With The Sands Rewards Club</h3>
              <p className='py-4 uppercase'>Sign up to earn as you play</p>
              <p className='text-[#333333] mb-4'>
                As a Sands Rewards Club member, you earn Sands Points and Sands Dollars on your Casino play. You may
                sign up at any Sands Rewards Club Counter located at:
              </p>
              <ul className='list-disc pl-5 text-[#333333] mb-5'>
                <li>B2M</li>
                <li>Level 1</li>
                <li>Level 2 Ruby Table Games Entrance</li>
                <li>Level 2 Ruby Slots Entrance</li>
                <li>Level 2 Apex Grand Entrance</li>
              </ul>
              {/* <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button> */}
            </div>
          </div>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>RESPONSIBLE GAMBLING</h2>
              <div className='hidden lg:block'>
                <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>A Commitment to Our Patrons</p>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  Our commitment to creating unforgettable experiences extends to every facet of our resort – right down
                  to the casino floor.
                </p>
                {/* <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                  View details
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button> */}
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={bannerLandingModule3} alt='bannerLandingModule3' />
              <div className='block lg:hidden'>
                <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>A Commitment to Our Patrons</p>
                <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>
                  Our commitment to creating unforgettable experiences extends to every facet of our resort – right down
                  to the casino floor.
                </p>
                {/* <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                  View details
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
