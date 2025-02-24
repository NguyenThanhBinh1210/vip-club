import bannerPC from '~/assets/restaurants-landing-masthead-desktop-1920x823.avif'
import bannerMobile from '~/assets/restaurants-landing-masthead-mobile-1080x1440.webp'
import { Slider } from '../Stay/SkyparkObservationDeck'
import bannerLandingModule1 from '~/assets/casino-landing-module-1-1920x1080.avif'

const FineDining = () => {
  const dataSlide2 = [1, 2, 3, 4, 5]
  const dataSlide4 = [1, 2, 3, 4, 5]
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
          <h1 className='uppercase text-[40px] text-center mb-10'>Fine Dining Restaurants</h1>

          <p className='text-center text-[16px] mb-4'>
            Discover the culinary arts at these fine dining restaurants in Singapore, Let’s Win Club. Unravel layers
            of exquisite flavors from the finest ingredients, brought to life by exceptional expertise.
          </p>
        </div>
      </div>

      <Slider
        tag={true}
        button2={true}
        dataSlide={dataSlide2}
        title='Romantic Restaurants'
        description='Transform any evening into a memorable occasion with the intimate ambience at these romantic restaurants. Perfect for celebrating anniversaries, engagements or simply savouring a special date night. '
        buttonTitle='View restaurants'
      ></Slider>

      <Slider
        tag={true}
        button2={true}
        dataSlide={dataSlide4}
        title='Special Occasions'
        description='Commemorate lifes most precious moments and add a dash of elegance to any occasion at these immaculate restaurants. Elevate your birthday bash to new heights with refined culinary creations.'
        buttonTitle='View restaurants'
      ></Slider>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Discover the Shoppes</h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                With an impressive selection of over 170 designer labels and luxury boutiques, your search for the finer things ends here. Spoil yourself with a captivating accessory to add some sparkle to your day, or find the perfect gift for that special someone.


              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View shops
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img className='mt-5 lg:mt-0 ' src={bannerLandingModule1} alt='bannerLandingModule1' />
            <div className='block lg:hidden'>
              <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>
                Get information on the general casino rules and conditions of entry.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  absolute hover:opacity-60  group transition-all duration-300'>
                View details
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ButtonBlack = ({ title, className }: { title: string; className?: string }) => {
  return (
    <button
      className={`bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px] ${className}`}
    >
      {title}
    </button>
  )
}

export default FineDining
