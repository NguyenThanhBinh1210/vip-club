import bannerLandingModule3 from '~/assets/casino-landing-module-3-1920x1080.webp'

import hotram1 from '~/assets/Gaming-Salon-2048x1366.jpg'
import hotram2 from '~/assets/Casino-Slot-Angle-1-2_S.jpg'
import hoian from '~/assets/GHI0408-HDR-scaled.webp'
import hoian2 from '~/assets/hoian2.webp'
import hoian3 from '~/assets/hoian3.webp'
import hotrambanner from '~/assets/hotrambannerpc.png'
import rewardsClub from '~/assets/rewards-club.avif'
import { ButtonBlack } from './Shop/Shopping'
import { Link } from 'react-router-dom'
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
              <h2 className='text-[25px] uppercase lg:text-[32px]'>VIP LOUNGE AT HO TRAM CASINO </h2>
              <div className='hidden lg:block'>
                <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  <p className='mb-2'>
                    Located in one of Vietnam’s <strong>largest and most renowned casinos</strong>, Let’s Win VIP Lounge at Ho Tram
                    delivers an exclusive experience, reserved only for our distinguished members.
                  </p>
                  <li className='mb-2'>
                    <strong>Private and elite environment</strong>, designed with luxurious interiors and top-tier amenities.
                  </li>
                  <li className='mb-2'>
                    <strong>Personalized services</strong>, including dedicated butlers, exclusive dining menus, and 24/7 assistance.
                  </li>
                  <li className='mb-2'>
                    <strong>Ultimate privacy and security</strong>, ensuring maximum comfort and peace of mind for VIP guests.
                  </li>
                </div>

                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={hotram1} alt='hotram1' />
              <div className='block lg:hidden'>
                <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                  <p className='mb-2'>
                    Located in one of Vietnam’s largest and most renowned casinos, Let’s Win VIP Lounge at Ho Tram
                    delivers an exclusive experience, reserved only for our distinguished members.
                  </p>
                  <li className='mb-2'>
                    <strong>Private and elite environment</strong>, designed with luxurious interiors and top-tier amenities.
                  </li>
                  <li className='mb-2'>
                    <strong>Personalized services</strong>, including dedicated butlers, exclusive dining menus, and 24/7 assistance.
                  </li>
                  <li className='mb-2'>
                    <strong>Ultimate privacy and security</strong>, ensuring maximum comfort and peace of mind for VIP guests.
                  </li>
                </div>

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
            <h2 className='text-[25px] uppercase block lg:hidden'>POKER CLUB IN DA NANG</h2>
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
              <h2 className='text-[32px] mt-10 uppercase mb-4 hidden lg:block'>POKER CLUB IN DA NANG</h2>
              <div className='space-y-4 p-4 pr-[34px] lg:p-0'>
                <p className='mb-2'>
                  A perfect destination for poker enthusiasts, Let’s Win Club in Da Nang hosts professional poker
                  tournaments in a prestigious and high-class setting.
                </p>
                <li> <strong>Private Poker rooms</strong>, featuring world-class gameplay with high-stakes betting.</li>
                <li> <strong>VIP services</strong> tailored for esteemed guests, ensuring an optimal experience.</li>
                <li>
                  <strong>Luxurious lounge area</strong>, serving premium cocktails and fine liquor, creating a refined and relaxing
                  environment for players.
                </li>
                <a href='tel:0909090909'>
                  <ButtonBlack className='ml-0 mt-10' title='Liên hệ ngay' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='py-20'>
          <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-5'>
              <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>VIP LOUNGE AT HOIANA CASINO</h2>

              <img className='mt-5 lg:mt-0 ' src={hoian} alt='hoian' />
              <div className='block lg:hidden pl-4 lg:pl-0'>
                <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  <p className='mb-2'>
                    Situated in an internationally renowned resort, Let’s Win VIP at Hoiana offers an exceptional
                    atmosphere, combining luxurious entertainment with elite-class sophistication.
                  </p>
                  <li className='mb-2'> <strong>Exclusive VIP rooms</strong>, designed with a lavish and opulent touch.</li>
                  <li className='mb-2'>
                    <strong>Premium VIP services</strong>, including limousine transfers, personalized assistance, and five-star
                    accommodations.
                  </li>
                  <li className='mb-2'>
                    <strong>Exclusive rewards</strong> for Let’s Win members, featuring luxury gifts and an attractive loyalty program.
                  </li>
                </div>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Liên hệ ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>VIP LOUNGE AT HOIANA CASINO</h2>
              <div className='hidden lg:block'>
                <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                  <p className='mb-2'>
                    Situated in an internationally renowned resort, Let’s Win VIP at Hoiana offers an exceptional
                    atmosphere, combining luxurious entertainment with elite-class sophistication.
                  </p>
                  <li className='mb-2'> <strong>Exclusive VIP rooms</strong>, designed with a lavish and opulent touch.</li>
                  <li className='mb-2'>
                    <strong>Premium VIP services</strong>, including limousine transfers, personalized assistance, and five-star
                    accommodations.
                  </li>
                  <li className='mb-2'>
                    <strong>Exclusive rewards</strong> for Let’s Win members, featuring luxury gifts and an attractive loyalty program.
                  </li>
                </div>
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
          <h3 className='uppercase text-[25px] mb-4 pl-4 lg:hidden'>Exclusive Benefits With Let's Vip Rewards Club</h3>
          <div className=' gap-x-10 lg:grid-cols-3 grid 2xl:grid-cols-5'>
            <div className='lg:col-span-2 2xl:col-span-3'>
              <img src={rewardsClub} alt='rewardsClub' className='h-max w-max' />
            </div>
            <div className='lg:col-span-1 2xl:col-span-2 2xl:pr-[180px] pl-4 pr-[34px] lg:p-0'>
              <h3 className='uppercase text-[32px] hidden lg:block'>Exclusive Benefits With Let's Vip Rewards Club</h3>
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
              <h2 className='text-[25px] uppercase lg:text-[32px]'>INTRODUCING LET’S WIN VIP CLUB
              </h2>
              <div className='hidden lg:block'>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  Let’s Win VIP Club is an exclusive system of VIP rooms, offering a luxurious gaming experience tailored for the elite. With sophisticated, private spaces and exclusive services, Let’s Win VIP Club asserts itself as the premier destination for those seeking a high-end experience at Vietnam’s most prestigious casinos.
                </p>

                <Link to='/contact-now'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Đặt ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </Link>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={bannerLandingModule3} alt='bannerLandingModule3' />
              <div className='block lg:hidden'>
                <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>About Let’s Win Club</p>

                <p className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                  Let’s Win VIP Club is an exclusive system of VIP rooms, offering a luxurious gaming experience
                  tailored for the elite. With sophisticated, private spaces and exclusive services, Let’s Win VIP Club
                  asserts itself as the premier destination for those seeking a high-end experience at Vietnam’s most
                  prestigious casinos.
                </p>

                <Link to='/contact-now'>
                  <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                    Đặt ngay
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
