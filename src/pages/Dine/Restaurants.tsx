import bannerPC from '~/assets/restaurants-landing-masthead-desktop-1920x823.avif'
import bannerMobile from '~/assets/restaurants-landing-masthead-mobile-1080x1440.webp'
import { Slider } from '../Stay/SkyparkObservationDeck'
import bannerLandingMastheadLeft from '~/assets/about-the-casino-left-1.webp'
import bannerLandingMastheadRight from '~/assets/about-the-casino-right-1.webp'

const Restaurants = () => {
  const dataSlide2 = [1, 2, 3, 4, 5]
  const dataSlide3 = [1, 2, 3, 4, 5]
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
      <div>
        <h1 className='text-center text-5xl uppercase mt-40'>AN ATLAS OF FLAVOUR</h1>
        <Sole title='SINGULAR TASTES FOR EVERY OCCASION'>
          <p className=''>
            Embark on a culinary odyssey through Singapore’s widest selection of dining venues and culinary traditions
            from around the world ― all in one destination. From award-winning celebrity-chef restaurants to scenic
            waterfront cafes and rooftop bars, our unparalleled array of dining options is designed to delight.
          </p>
          <div className='mt-10'>
            <ButtonBlack className='float-left' title='view all restaurants' />
          </div>
        </Sole>
      </div>

      <Slider dataSlide={dataSlide2} title='Featured' buttonTitle='View restaurants'></Slider>

      <Slider dataSlide={dataSlide4} title='CHOOSE YOUR EXPERIENCE' buttonTitle='DISCOVER MORE'></Slider>
      <Slider dataSlide={dataSlide3} title='MEET OUR CELEBRITY CHEFS' buttonTitle='DISCOVER MORE'></Slider>
      <div className='py-20'></div>
    </div>
  )
}

const Sole = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className='pt-40 pb-20'>
      <div className='pl-4'>
        <h2 className='text-[25px] uppercase block lg:hidden'>{title}</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 lg:w-[59pc] xl:w-[79pc] 2xl:w-[82pc] mx-auto'>
        <div>
          <img
            className='lg:pt-[15pc] mt-[2pc] lg:mt-0'
            src={bannerLandingMastheadLeft}
            alt='bannerLandingMastheadLeft'
          />
        </div>
        <div>
          <img className='pt-[140pt] lg:pt-0' src={bannerLandingMastheadRight} alt='bannerLandingMastheadRight' />
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <h2 className='text-[32px] mt-10 uppercase mb-4 hidden lg:block'>About the casino</h2>
          <div className='space-y-4 p-4 pr-[34px] lg:p-0'>
            <>{children}</>
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

export default Restaurants
