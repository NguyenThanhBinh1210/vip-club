import bannerPC from '~/assets/shoppes-landing-masthead-desktop-1920x823.avif'
import bannerMobile from '~/assets/shoppes-landing-masthead-mobile-1080x1440.webp'
import { Slider } from '../Stay/SkyparkObservationDeck'
import bannerLandingMastheadLeft from '~/assets/about-the-casino-left-1.webp'
import bannerLandingMastheadRight from '~/assets/about-the-casino-right-1.webp'

const Shopping = () => {
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
        <h1 className='text-center text-5xl uppercase mt-40'>SOPHISTICATED STYLE</h1>
        <Sole title='About the casino'>
          <p>
            Home to 18 duplex and flagship stores by some of the most coveted luxury brands, The Shoppes is a shopping
            destination like no other.
          </p>
          <p className=''>
            {' '}
            Experience the world’s only floating Louis Vuitton Island Maison and visit a one-of-a-kind Apple store
            entirely surrounded by water. With over 170 luxury and premium boutiques, it’s every discerning shopper’s
            dream.
          </p>
          <div className='mt-10'>
            <ButtonBlack className='float-left' title='FIND A STORE' />
          </div>
        </Sole>
      </div>

      <Slider
        background='bg-[#eef0eb]'
        dataSlide={dataSlide2}
        title='WHAT’S IN SEASON'
        description='Discover our latest openings, arrivals and limited-edition launches.'
        buttonTitle='View details'
      ></Slider>
      <Slider
        dataSlide={dataSlide3}
        title='NEW AT THE SHOPPES'
        description='Explore the newest additions to our mall.'
        buttonTitle='View details'
      ></Slider>
      <Slider
        background='bg-[#eef0eb]'
        dataSlide={dataSlide4}
        title='TAILORED TO YOUR NEEDS'
        buttonTitle='View details'
      ></Slider>
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
export const ButtonBlack = ({
  title,
  className,
  onClick
}: {
  title: string
  className?: string
  onClick?: () => void
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px] ${className}`}
    >
      {title}
    </button>
  )
}

export default Shopping
