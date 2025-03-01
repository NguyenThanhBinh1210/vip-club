import bannerPC from '~/assets/the-sands-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/the-sands-collection-masthead-mobile.avif'
const MembersPrivileges = () => {
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
          <h1 className='uppercase text-[40px] text-center mb-10'>EXCLUSIVE MEMBER PRIVILEGES
          </h1>
          <p className='text-center text-[16px] mb-4'>
            Make the most of your visit and be rewarded with a lifestyle of indulgences as you earn and redeem at over 250 Sands Outlets
          </p>
          <p className='text-center text-[16px] mb-4'>
            Your Resort Dollars are as good as cash that can be spent in Marina Bay Sands. Upgrade your membership tier to unlock greater benefits.


          </p>


        </div>
      </div>
    </div>
  )
}

export default MembersPrivileges
