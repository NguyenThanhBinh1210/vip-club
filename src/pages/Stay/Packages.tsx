import bannerPC from '~/assets/packages-landing-d.avif'
import bannerMobile from '~/assets/packages-landing-m.avif'
import sandsPremierRoom1 from '~/assets/sands-premier-room-1.avif'
import { Link } from 'react-router-dom'

const Packages = () => {
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
          <h1 className='uppercase text-[40px] text-center mb-10'>A Paradise That’s Tailored to You</h1>

          <p className='text-center text-[16px] mb-4'>
            Explore stay packages curated for families, couples and individuals with discerning taste, curious minds and an appetite for adventure
          </p>


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



    </div>
  )
}

export default Packages
