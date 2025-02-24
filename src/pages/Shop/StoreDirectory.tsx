import bannerPC from '~/assets/shoppes-directory-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/shoppes-directory-masthead-mobile-1080x1440.jpg'
import acnestudios from '~/assets/acnestudios-logo-black-1920x1080.avif'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const StoreDirectory = () => {
  const [showFull, setShowFull] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null)

  const toggleFilters = () => {
    setShowFilters(!showFilters)
    if (!showFilters) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index)
  }

  return (
    <>
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
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto  px-4 lg:px-0'>
          <h1 className='text-center text-5xl uppercase mt-40 mb-20'>SHOPPING DIRECTORY</h1>
          <div className='grid grid-cols-2 mb-4'>
            <div className='px-[20px] py-[10px] bg-[#e1e2d6]'>
              <input type='text' placeholder='SEARCH' className='w-full border-b border-[#c5c6bc] ' />
            </div>
          </div>
          <div className='text-lg mb-2'>Browse by category</div>
          <div className='flex justify-between items-center mb-20'>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-[#f6f4ef] px-[15px] py-2 uppercase cursor-pointer'>Women's Fashion</div>
              <div className='bg-[#f6f4ef] px-[15px] py-2 uppercase cursor-pointer'>Men's Fashion</div>
              <div className='bg-[#f6f4ef] px-[15px] py-2 uppercase cursor-pointer'>Jewellery</div>
              <div className='bg-[#e1e2d6] px-[15px] py-2 uppercase cursor-pointer'>Watches</div>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <button
                onClick={toggleFilters}
                className='flex px-[20px] py-1 gap-2 items-center uppercase border border-black hover:opacity-60 transition-all duration-300'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                  <path
                    fillRule='evenodd'
                    d='M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z'
                    clipRule='evenodd'
                  />
                </svg>
                filters
              </button>
              <button
                onClick={() => setShowFull(!showFull)}
                className='flex px-[20px] py-1 gap-2 items-center uppercase border border-black'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className={`size-6 ${!showFull ? 'opacity-60' : ''}`}
                >
                  <path
                    fillRule='evenodd'
                    d='M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className={`size-6 ${showFull ? 'opacity-60' : ''}`}
                >
                  <path
                    fillRule='evenodd'
                    d='M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='border-b border-[#c5c6bc] mb-10 flex flex-wrap items-center gap-3 gap-y-5'>
            <div className='flex items-center gap-2 py-2 uppercase'>
              Watches
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5 cursor-pointer'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className={`${showFull && 'md:grid-cols-2 xl:grid-cols-4 gap-y-20 mt-10'} grid  gap-10 `}>
            {Array.from({ length: 10 }).map((_, index) => (
              <StoreItem index={index} showFull={showFull} />
            ))}
          </div>
        </div>
      </div>
      <div className={` transition-all duration-300 ${showFilters ? 'opacity-100 visible' : 'opacity-0 invisible'} border border-[#c5c6bc] md:w-[718px] w-full bg-[#f0f1eb] md:max-h-[90vh] h-[100vh] md:h-max fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <div className='flex justify-between items-center p-5'>
          <div className='text-xl uppercase '>Filters</div>
          <button onClick={toggleFilters} className='text-2xl uppercase'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
              <path
                fillRule='evenodd'
                d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className='mb-5 px-5'>
          <Accordion
            title='Category'
            size='sm'
            isOpen={openAccordionIndex === 0}
            onToggle={() => handleAccordionToggle(0)}
          >
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='men' type='checkbox' />
              <label htmlFor='men' className='uppercase text-sm'>
                Men's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='women' type='checkbox' />
              <label htmlFor='women' className='uppercase text-sm'>
                Women's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='jewellery' type='checkbox' />
              <label htmlFor='jewellery' className='uppercase text-sm'>
                Jewellery
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='watches' type='checkbox' />
              <label htmlFor='watches' className='uppercase text-sm'>
                Watches
              </label>
            </div>
          </Accordion>
          <Accordion
            title='Sands LifeStyle Privileges'
            size='sm'
            isOpen={openAccordionIndex === 1}
            onToggle={() => handleAccordionToggle(1)}
          >
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='men' type='checkbox' />
              <label htmlFor='men' className='uppercase text-sm'>
                Men's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='women' type='checkbox' />
              <label htmlFor='women' className='uppercase text-sm'>
                Women's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='jewellery' type='checkbox' />
              <label htmlFor='jewellery' className='uppercase text-sm'>
                Jewellery
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='watches' type='checkbox' />
              <label htmlFor='watches' className='uppercase text-sm'>
                Watches
              </label>
            </div>
          </Accordion>
          <Accordion
            title='Stores Accept'
            size='sm'
            isOpen={openAccordionIndex === 2}
            onToggle={() => handleAccordionToggle(2)}
          >
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='men' type='checkbox' />
              <label htmlFor='men' className='uppercase text-sm'>
                Men's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='women' type='checkbox' />
              <label htmlFor='women' className='uppercase text-sm'>
                Women's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='jewellery' type='checkbox' />
              <label htmlFor='jewellery' className='uppercase text-sm'>
                Jewellery
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='watches' type='checkbox' />
              <label htmlFor='watches' className='uppercase text-sm'>
                Watches
              </label>
            </div>
          </Accordion>
          <Accordion
            title='Location'
            size='sm'
            isOpen={openAccordionIndex === 3}
            onToggle={() => handleAccordionToggle(3)}
          >
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='men' type='checkbox' />
              <label htmlFor='men' className='uppercase text-sm'>
                Men's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='women' type='checkbox' />
              <label htmlFor='women' className='uppercase text-sm'>
                Women's Fashion
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='jewellery' type='checkbox' />
              <label htmlFor='jewellery' className='uppercase text-sm'>
                Jewellery
              </label>
            </div>
            <div className='flex items-center gap-2 cursor-pointer mb-2'>
              <input id='watches' type='checkbox' />
              <label htmlFor='watches' className='uppercase text-sm'>
                Watches
              </label>
            </div>
          </Accordion>
        </div>
        <div className='px-5 pb-5 flex gap-5'>
          <div className='flex items-center gap-2'>
            <ButtonBlack title='Apply' />
            <ButtonOutline title='Clear all' />
          </div>
        </div>
      </div>
    </>
  )
}
const Accordion = ({
  children,
  title,
  size = 'md',
  isOpen,
  onToggle
}: {
  children: React.ReactNode
  title: string
  size?: string
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div className={`transition-all duration-300`}>
      <div
        onClick={onToggle}
        className={`flex justify-between items-center cursor-pointer ${size === 'sm' ? 'py-2' : 'py-5 px-[15px] md:py-5 md:px-[100px]'
          }`}
      >
        <div className={`text-sm uppercase`}>{title}</div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`lucide lucide-chevron-up transition-all duration-300 size-5 ${isOpen ? '' : 'rotate-180'}`}
        >
          <path d='m18 15-6-6-6 6' />
        </svg>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${size === 'sm' ? 'pb-0' : 'px-[15px] md:px-[100px]'} ${isOpen ? 'pb-4 max-h-[1000px]' : 'pb-0 max-h-[0px]'
          }`}
      >
        <>{children}</>
      </div>
    </div>
  )
}
const ButtonBlack = ({ title, className }: { title: string; className?: string }) => {
  return (
    <button
      className={`bg-black block mx-auto border border-black  hover:opacity-60 text-white uppercase px-5 py-1 transition-all duration-300 text-[16px] ${className}`}
    >
      {title}
    </button>
  )
}
const ButtonOutline = ({ title, className }: { title: string; className?: string }) => {
  return (
    <button
      className={`bg-transparent border border-black block mx-auto  hover:opacity-60 text-black uppercase px-5 py-1 transition-all duration-300 text-[16px] ${className}`}
    >
      {title}
    </button>
  )
}
export const StoreItem = ({ index, showFull }: { index: number; showFull: boolean }) => {
  return (
    <div key={index} className={`${!showFull && 'border-b pb-10'}`}>
      {showFull && (
        <Link to='/'>
          <div className='bg-[#f0f1eb]'>
            <img src={acnestudios} alt='acnestudios' />
          </div>
        </Link>
      )}
      <div>
        <div className={`${!showFull && 'grid md:grid-cols-2'}`}>
          <div>
            <Link to='/' className={`text-xl  block uppercase ${!showFull ? 'pb-4' : 'py-4'}`}>
              Acne Studios
            </Link>
            <div className=' items-center gap-2 uppercase space-x-4 inline-block md:mb-10 mb-4'>
              <span>Men's Fashion</span>
              <span>| </span>
              <span>Women's Fashion</span>
            </div>
          </div>
          <div className='flex flex-col gap-4 mb-4'>
            <div className='flex items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                <path
                  fillRule='evenodd'
                  d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-sm text-[#333333]'>The Shoppes, #B2-81</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                <path
                  fillRule='evenodd'
                  d='M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='text-sm text-[#333333]'>South (Blue Zone)</span>
            </div>
          </div>
        </div>
        {showFull && (
          <div className='text-xs text-[#877f80] border border-[#877f80] px-2 py-1  inline-block mb-10'>
            Earn & Redeem Resort Dollars
          </div>
        )}
      </div>
    </div>
  )
}
export default StoreDirectory
