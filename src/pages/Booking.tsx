import Bokingbanner from '~/assets/download.jpg'
import Bokingbanner2 from '~/assets/download (1).jpg'
import Bokingbanner3 from '~/assets/4sand.avif'
import creadit1 from '~/assets/1_4_creditCardImage.svg'
import creadit2 from '~/assets/2_2_creditCardImage.svg'
import creadit3 from '~/assets/3_2_creditCardImage.svg'
import creadit4 from '~/assets/6_1_creditCardImage.svg'
import sqm from '~/assets/sqm.webp'
import walkout from '~/assets/walk-out-balcony.webp'
import kingbed from '~/assets/king-bed.webp'
import cocktail from '~/assets/cocktail.webp'
import { useState } from 'react'
import RangeCalendar from '~/components/RangeCalendar'
import { ButtonBlack } from './Shop/Shopping'
import { ButtonLine } from './Dine/RooftopDining'
const Booking = () => {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [stage, setStage] = useState(1)
  const [selectedView, setSelectedView] = useState('All room views')
  const [selectedHotel, setSelectedHotel] = useState('All Hotel Collections')
  const [selectedMoney, setSelectedMoney] = useState('VND')
  const [selectedSort, setSelectedSort] = useState('Recommended')
  const initialView = [
    {
      name: 'All room views',
      value: 'All room views'
    },
    {
      name: 'City View',
      value: 'City View'
    },
    {
      name: 'Gardens by the Bay View',
      value: 'Gardens by the Bay View'
    },
    {
      name: 'Sea View',
      value: 'Sea View'
    },
    {
      name: 'City & Sea View',
      value: 'City & Sea View'
    }
  ]
  const initialHotel = [
    {
      name: 'All Hotel Collections',
      value: 'All Hotel Collections'
    },
    {
      name: 'The Sands Collection',
      value: 'The Sands Collection'
    },
    {
      name: 'The Paiza Collection',
      value: 'The Paiza Collection'
    },
    {
      name: 'The Family Suite',
      value: 'The Family Suite'
    }
  ]
  const initialMoney = [
    {
      name: 'AED(AED)',
      value: 'AED'
    },
    {
      name: 'VND(VND)',
      value: 'VND'
    },
    {
      name: 'CNY(¥)',
      value: 'CNY'
    },
    {
      name: 'EUR(€)',
      value: 'EUR'
    },
    {
      name: 'HKD(HKD $)',
      value: 'HKD'
    },
    {
      name: 'IDR(Rp)',
      value: 'IDR'
    },
    {
      name: 'MYR(RM)',
      value: 'MYR'
    },
    {
      name: 'NZD(NZD $)',
      value: 'NZD'
    },
    {
      name: 'TWD(NT$)',
      value: 'TWD'
    },
    {
      name: 'USD(USD)',
      value: 'USD'
    }
  ]
  const initialSort = [
    {
      name: 'Recommended',
      value: 'Recommended'
    },
    {
      name: 'Lowest Price',
      value: 'Lowest Price'
    },
    {
      name: 'Highest Price',
      value: 'Highest Price'
    }
  ]
  return (
    <div className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto pt-[60px]'>
      <div className='py-20'>
        <img src={Bokingbanner2} alt='Bokingbanner2' className='hidden md:block' />
        <img src={Bokingbanner} alt='Bokingbanner' className=' md:hidden w-full ' />
      </div>
      <h1 className='text-center text-4xl pb-20 uppercase'>BOOK YOUR STAY</h1>
      <div className='bg-[#f0f1eb] p-5  flex items-center flex-wrap gap-4 mb-10'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${stage >= 1 ? '' : 'opacity-20'
              }`}
          >
            1
          </div>
          <span className={`uppercase hidden md:block ${stage >= 1 ? '' : 'opacity-20'}`}>Search</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${stage >= 2 ? '' : 'opacity-20'
              }`}
          >
            2
          </div>
          <span className={`uppercase hidden md:block ${stage >= 2 ? '' : 'opacity-20'}`}>Select Room</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${stage >= 3 ? '' : 'opacity-20'
              }`}
          >
            3
          </div>
          <span className={`uppercase hidden md:block ${stage >= 3 ? '' : 'opacity-20'}`}>
            Guest & Credit Card Information
          </span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${stage >= 4 ? '' : 'opacity-20'
              }`}
          >
            4
          </div>
          <span className={`uppercase hidden md:block ${stage >= 4 ? '' : 'opacity-20'}`}>Confirmation</span>
        </div>
      </div>
      <div className='mb-10'>
        {stage === 1 && (
          <div className='grid md:grid-cols-12 bg-[#f0f1eb] border border-[#c5c6bc]'>
            <div className='md:col-span-7 border-b md:border-r md:border-b-0 border-[#c5c6bc]'>
              <div className='p-6  '>Rates shown in S$</div>
              <div className='p-6  border-t  border-[#c5c6bc]'>
                <RangeCalendar />
              </div>
            </div>
            <div className='md:col-span-5  border-[#c5c6bc]'>
              <div className='p-6  uppercase font-medium '>NO. OF ROOMS & GUESTS</div>
              <div className='p-6 border-t  border-[#c5c6bc]'>
                <div className='mb-5'>ROOM 1</div>
                <div className='flex items-center gap-10'>
                  <div className='flex xl:items-center flex-col xl:flex-row w-max gap-3'>
                    <span className='uppercase'>Adults</span>
                    <ButtonCounter count={adults} setCount={setAdults} max={4} />
                  </div>
                  <div className='flex xl:items-center flex-col xl:flex-row w-max gap-3'>
                    <span className='uppercase'>Children</span>
                    <ButtonCounter count={children} setCount={setChildren} max={4} />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-4'>
                  {Array.from({ length: children }).map((_, index) => (
                    <div key={index} className='flex flex-col'>
                      <span className='uppercase'>Child {index + 1} age</span>
                      <select className='border-b border-[#c5c6bc] p-1'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {stage === 2 && (
          <div>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2  uppercase text-xl'>
                APR 2, 2025{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
                APR 5, 2025
              </div>
              <div className='flex items-center gap-2  uppercase '>
                3 Nights | 1 Room, 1 Adult
                <button className='text-black underline uppercase'>Edit</button>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[1px]'>
              <SelectRoom initialView={initialView} selected={selectedView} setSelected={setSelectedView} />
              <SelectRoom initialView={initialHotel} selected={selectedHotel} setSelected={setSelectedHotel} />
              <SelectRoom
                classNames={{ li: 'text-right' }}
                initialView={initialMoney}
                selected={selectedMoney}
                setSelected={setSelectedMoney}
              />
            </div>
            <div className='flex justify-end items-center mb-5'>
              <span className='uppercase'>Sort by:</span>
              <SelectRoom
                classNames={{ header: 'p-0 gap-x-2 bg-transparent', li: '' }}
                initialView={initialSort}
                selected={selectedSort}
                setSelected={setSelectedSort}
              />
            </div>
            <div className='space-y-10'>
              {Array.from({ length: 10 }).map((_, index) => (
                <ItemRoom setStage={setStage} index={index} />
              ))}
            </div>
          </div>
        )}
        {stage === 3 && (
          <div className='flex gap-5 flex-col-reverse md:flex-row'>
            <div className='space-y-5 md:w-2/3'>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>GUEST INFORMATION</p>
                <p className='text-sm mb-5'>Please input in English only.</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Title</div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full md:max-w-[178px]'>
                        <option value='1'>Mr</option>
                        <option value='2'>Ms</option>
                        <option value='3'>Mrs</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      First Name
                      <p className='text-xs'>(As printed on your passport)</p>
                    </div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='First Name' />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      Last Name
                      <p className='text-xs'>(As printed on your passport)</p>
                    </div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Last Name' />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Country/Territory</div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full '>
                        <option value='1'>a</option>
                        <option value='2'>b</option>
                        <option value='3'>c</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Phone Number</div>
                    <div className='flex-1 flex items-center gap-2'>
                      <select className='border-b border-[#c5c6bc] p-1 w-[120px]'>
                        <option value='1'>+84</option>
                        <option value='2'>b</option>
                        <option value='3'>c</option>
                      </select>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Last Name' />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Email</div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Email' />
                    </div>
                  </div>
                </div>
                <p className='uppercase text-xl mb-6'>Room 1: Preferences</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      Hotel Arrival Time
                      <p className='text-xs'>(Check-in from 3pm)</p>
                    </div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full md:max-w-[178px]'>
                        <option value='1'>15:00</option>
                        <option value='2'>15:00</option>
                        <option value='3'>15:00</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Are you celebrating an occasion?</div>
                    <div className='flex-1 flex gap-10 items-center'>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' />
                        <p> No</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' />
                        <p>Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Room Preferences</div>
                    <div className='flex-1 '>
                      <select className='border-b border-[#c5c6bc] p-1 w-full '>
                        <option value='1'>No preference</option>
                        <option value='2'>No preference</option>
                        <option value='3'>No preference</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>AVAILABLE UPGRADES & ADD-ONS</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Upgrade Your Room</div>
                    <div className='flex-1'>
                      <p>Enhance your stay by upgrading your room for only VND1,992,727.17* more per night.</p>
                      <ButtonBlack className='mx-0 mb-0' title='UPGRADE ROOM' />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Airport Transfer Service</div>
                    <div className='flex-1'>
                      <p>Arrive from the airport at VND4,981,817.93 per transfer.</p>
                      <ButtonBlack className='mx-0 mb-0' title='UPGRADE ROOM' />
                    </div>
                  </div>
                  <p className='text-xs text-right '>*Subject to GST and charges</p>
                </div>
              </div>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>PAYMENT METHOD</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>Preferred mode of payment</div>
                    <div className='flex-1 flex gap-5 items-center'>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit1} alt='creadit1' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit2} alt='creadit2' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit3} alt='creadit3' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit4} alt='creadit4' className='h-6' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-5 space-y-2'>
                <div className='flex items-start gap-2 text-sm'>
                  <input type='checkbox' />
                  <p className='-translate-y-1'>I have read and accept the Terms & Conditions.</p>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <input type='checkbox' />
                  <p className='-translate-y-1'>
                    I wish to receive MBS marketing updates, preferably personalised content that I may be interested
                    in, via any means of communications including email, text messaging, MBS devices, MBS applications,
                    MBS websites, and other Third-party websites that I visit. I agree to MBS processing my personal
                    data as set out here to fulfil my request and I understand that I may visit MBS Data Protection
                    Office for details on how to access or correct my data or withdraw my consent.
                  </p>
                </div>
              </div>
              <ButtonBlack className=' mx-0' title='PROCEED' />
              <p className='text-sm'>
                Cancellation made prior to Mar 30, 2025 will incur no charges. However, a VND21,025,662.92 (S$1,055.12)
                fee will apply for cancellation made after this date.
              </p>
            </div>
            <div className='border  bg-[#e1e2d6] p-5 md:w-1/3 md:sticky top-[100px] h-max'>
              <div className='flex justify-between items-center mb-2'>
                <p className='uppercase '>APR 2, 2025 APR 5, 2025</p>
                <button className='uppercase underline'>Edit</button>
              </div>
              <div className='uppercase mb-3'>3 Nights | 1 Room</div>
              <p className='uppercase mb-2 text-xl'>ROOM 1: 1 Adult</p>
              <img src={Bokingbanner3} alt='Bokingbanner3' className='w-full mb-2' />
              <div className='flex justify-between items-center mb-3'>
                <p className='uppercase '>APR 2, 2025 APR 5, 2025</p>
                <button className='uppercase underline'>Edit</button>
              </div>
              <div className='flex justify-between items-center mb-3 text-sm'>
                <p className=' '>Book Direct Exclusive</p>
                <p className=' '>VND52,607,997.30</p>
              </div>
              <div className='flex justify-between items-center mb-3 text-sm'>
                <p className=' '>Tax & Service Charges</p>
                <p className=' '>VND10,468,991.46</p>
              </div>
              <div className='flex justify-between items-center  text-sm'>
                <p className=' text-lg uppercase'>TOTAL</p>
                <p className='text-lg '>VND10,468,991.46</p>
              </div>
              <p className='text-sm text-right'>S$3,165.36</p>
              <p className='text-xs text-right underline mt-4'>Payment and Cancellation Policy</p>
              <p className='text-xs text-right '>Rate and availability are subject to changes. Plan</p>
            </div>
          </div>
        )}
      </div>
      {stage === 1 && (
        <ButtonBlack
          onClick={() => {
            setStage(2)
          }}
          title='CHECK AVAILABILITY'
        />
      )}
    </div>
  )
}

const SelectRoom = ({
  initialView,
  selected,
  setSelected,
  classNames
}: {
  initialView: { name: string; value: string }[]
  selected: string
  setSelected: (value: string) => void
  classNames?: {
    header?: string
    li?: string
    ul?: string
  }
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative '>
      <div
        className={`bg-[#e1e2d6] px-4 py-2.5 t uppercase flex justify-between items-center cursor-pointer ${classNames?.header}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className={`size-4 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        className={`bg-[#f8f8f5] z-[51] text-sm transition-all duration-300 absolute top-full left-0 w-full overflow-hidden ${isOpen ? 'max-h-[1000px] py-4' : 'max-h-0 '
          } ${classNames?.ul}`}
      >
        {initialView.map((item) => (
          <div
            className={` w-full cursor-pointer uppercase hover:bg-[#dcddd7] px-5 py-1 ${classNames?.li}`}
            onClick={() => {
              setSelected(item.name)
              setIsOpen(false)
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

const ButtonCounter = ({
  count,
  setCount,
  max
}: {
  count: number
  setCount: (count: number) => void
  max?: number
}) => {
  return (
    <div className='flex items-center  bg-[#c5c6bc] w-max'>
      <button
        className='size-9 flex items-center justify-center '
        onClick={() => {
          if (count > 1) {
            setCount(count - 1)
          }
        }}
      >
        -
      </button>
      <div className=' size-9 flex items-center justify-center  '>{count}</div>
      <button
        className='size-9 flex items-center justify-center '
        onClick={() => {
          if (max && count < max) {
            setCount(count + 1)
          }
        }}
      >
        +
      </button>
    </div>
  )
}

const ItemRoom = ({ index, setStage }: { index: number; setStage: (stage: number) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div key={index} className='border border-[#c5c6bc] bg-[#f0f1eb]'>
      <div className={`    md:flex border-b border-[#c5c6bc] relative ${isOpen ? 'border-b-0' : ''}`}>
        {isOpen && (
          <button className='absolute top-2 right-2' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
              <path
                fillRule='evenodd'
                d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        )}
        <div
          className={`grid md:grid-cols-2 gap-5 transition-all duration-300  p-5 ${isOpen ? 'md:w-[100%]' : 'md:w-[75%]'
            }`}
        >
          <div>
            <img src={Bokingbanner3} alt='Bokingbanner3' className='w-full' />
          </div>
          <div className='space-y-3'>
            <p className='uppercase text-xl'>Sands Premier Room - Gardens by the Bay View</p>
            <p className='text-xs '>174 rooms booked in the last 24 hours</p>
            <p className='text-sm '>Up to 3 guests</p>
            <div className='flex items-center gap-2 text-sm'>
              <img src={sqm} alt='sqm' className='w-6' />
              <span className='uppercase'>45 sqm on average</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <img src={walkout} alt='walkout' className='w-6' />
              <span className='uppercase'>Walk-out balcony</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <img src={cocktail} alt='cocktail' className='w-6' />
              <span className='uppercase'>Bespoke Armoire & cocktail bar</span>
            </div>
            <p className='text-xs'>Includes amenities afforded to lower room types</p>
            <ButtonLine buttonTitle='View room details' />
          </div>
        </div>
        <div className={` bg-[#e1e2d6] p-5 ${isOpen ? 'hidden' : ''}`}>
          <p>From</p>
          <div className='md:w-full'>
            <span className='text-4xl' style={{ wordBreak: 'break-all' }}>
              VND17,536,000
            </span>
            <span className='text-base' style={{ wordBreak: 'break-all' }}>
              /night
            </span>
          </div>
          <p className='text-xs my-3'>Subject to GST and charges</p>
          <p className='text-sm mb-5'>Only available with King Bed Rate and availability are subject to changes.</p>

          <div className='flex items-center justify-start'>
            <ButtonBlack onClick={() => setIsOpen(!isOpen)} className='mx-0 mb-0' title='VIEW PACKAGES' />
          </div>
        </div>
      </div>
      <div
        className={`  transition-all duration-300 overflow-hidden  ${isOpen ? 'max-h-[200000px] px-5 pb-5' : 'max-h-0 '
          }`}
      >
        <div>
          <p className='text-xl uppercase mb-5'>Choose bed type</p>
          <div className='flex gap-5 mb-7 '>
            <div className='flex flex-col items-center gap-3 bg-[#e1e2d6] p-2 w-[140px]'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                  clipRule='evenodd'
                />
              </svg>
              <img src={kingbed} alt='kingbed' className='w-14' />
              <span className='uppercase text-sm'>King Bed</span>
            </div>
          </div>
        </div>
        <div>
          <p className='text-xl uppercase mb-5'>Choose a package</p>
          <div className='space-y-4'>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className='  gap-2 bg-[#e1e2d6] p-5 w-full grid  lg:grid-cols-4 gap-x-10 '>
                <div className='uppercase'>Book Direct Exclusive</div>
                <div>
                  <p className='text-sm'>Receive our best available rate when you book on our official site.</p>
                  <span className='text-sm underline'>View details</span>
                </div>
                <div className='space-y-2'>
                  <div>
                    <span className='text-4xl' style={{ wordBreak: 'break-all' }}>
                      VND17,536,000
                    </span>
                    <span className='text-base' style={{ wordBreak: 'break-all' }}>
                      avg./night
                    </span>
                  </div>
                  <span className='text-xs my-2'>Subject to GST and charges</span>
                  <div className='underline text-sm px-2 py-1 bg-[#877f80] text-white w-max'>Free Cancellation</div>
                </div>
                <div>
                  <ButtonBlack onClick={() => setStage(3)} className='w-full mt-0 mb-0' title='Book' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Booking
