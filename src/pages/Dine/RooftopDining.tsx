import bannerPC from '~/assets/packages-landing-d.avif'
import bannerMobile from '~/assets/packages-landing-m.avif'
import spagoBar from '~/assets/spago-bar.avif'
import { ButtonBlack } from './Restaurants'
import { Link } from 'react-router-dom'

const RooftopDining = () => {
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
          <h1 className='uppercase text-[40px] text-center mb-10'>Rooftop Bars & Restaurants</h1>

          <p className='text-center text-[16px] mb-4'>
            Elevate your meal to greater heights at these rooftop restaurants in Singapore. Toast to the spectacular
            view with a handcrafted cocktail in hand, or dine al fresco from the top of the world.
          </p>
        </div>
      </div>
      <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto  px-4 lg:px-0 space-y-16'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <div className='uppercase'>
              <p className='text-lg  my-3 md:text-xl'>Spago Bar & Lounge</p>
              <div className='text-sm mb-3'>Western | Rooftop | Bar</div>
            </div>
            <div className='grid md:grid-cols-2 gap-5 md:gap-10'>
              <div className='uppercase'>
                <img src={spagoBar} alt='spagoBar' />
              </div>
              <div>
                <p className='text-[#333333] text-[15px] mb-3'>
                  Dine al fresco with views of the iconic Infinity Pool at Spago Bar & Lounge. Feast on signature light
                  bites such as the Big Eye Tuna Tartare Cones, paired with artisanal cocktails.
                </p>
                <div className='my-4 md:my-8'>
                  <ButtonLine buttonTitle='View restaurant' />
                </div>
                <Link to='/booking'>
                  <ButtonBlack className='float-left' title='Reserve Now' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const ButtonLine = ({ buttonTitle }: { buttonTitle: string }) => {
  return (
    <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
      {buttonTitle}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
    </button>
  )
}

export default RooftopDining
