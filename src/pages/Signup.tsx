import Bokingbanner from '~/assets/download.jpg'
import Bokingbanner2 from '~/assets/download (1).jpg'
import Bokingbanner3 from '~/assets/4sand.avif'
import creadit1 from '~/assets/1_4_creditCardImage.svg'
import creadit2 from '~/assets/2_2_creditCardImage.svg'
import creadit3 from '~/assets/3_2_creditCardImage.svg'
import creadit4 from '~/assets/6_1_creditCardImage.svg'

import { ButtonBlack } from './Shop/Shopping'
import { Link, useLocation } from 'react-router-dom'
const Signup = () => {
  const state = useLocation()?.state?.state || 1

  return (
    <div className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto py-[60px]'>
      <div className='py-20'>
        <img src={Bokingbanner2} alt='Bokingbanner2' className='hidden md:block w-full' />
        <img src={Bokingbanner} alt='Bokingbanner' className=' md:hidden w-full ' />
      </div>
      <h1 className='text-center text-4xl  uppercase'>Sign up for your free Sands LifeStyle membership</h1>
      <p className='pb-20 mt-2 text-center uppercase'>
        Already have an account?{' '}
        <Link to='/login' className='text-black underline'>
          Login here.
        </Link>
      </p>
      <div className='bg-[#f0f1eb] p-5  flex items-center flex-wrap gap-4 mb-10'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 1 ? '' : 'opacity-20'
              }`}
          >
            1
          </div>
          <span className={`uppercase hidden md:block ${state >= 1 ? '' : 'opacity-20'}`}>Particulars</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 2 ? '' : 'opacity-20'
              }`}
          >
            2
          </div>
          <span className={`uppercase hidden md:block ${state >= 2 ? '' : 'opacity-20'}`}>Digital Account</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 3 ? '' : 'opacity-20'
              }`}
          >
            3
          </div>
          <span className={`uppercase hidden md:block ${state >= 3 ? '' : 'opacity-20'}`}>Complete</span>
        </div>
      </div>
      <div className='mb-10'>
        {state === 1 && (
          <>
            <div className='grid md:grid-cols-2 bg-[#f0f1eb] p-5 md:p-14 gap-x-20 gap-y-10'>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  Last Name
                  <p className='text-xs'>(As printed on your passport)</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Last Name' />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  First Name
                  <p className='text-xs'>(As printed on your passport)</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='First Name' />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  Date of Birth
                  <p className='text-xs'>(You need to be at least 18 years old to join.)</p>
                </div>
                <div className='flex-1 grid grid-cols-3 gap-x-5'>
                  <input className=' border-b border-[#c5c6bc] p-1 w-full' placeholder='DD' />
                  <select className='border-b border-[#c5c6bc] p-1 w-full '>
                    <option value='13'>MMM</option>
                    <option value='1'>Jan</option>
                    <option value='2'>Feb</option>
                    <option value='3'>Mar</option>
                    <option value='4'>Apr</option>
                    <option value='5'>May</option>
                    <option value='6'>Jun</option>
                    <option value='7'>Jul</option>
                    <option value='8'>Aug</option>
                    <option value='9'>Sep</option>
                    <option value='10'>Oct</option>
                    <option value='11'>Nov</option>
                    <option value='12'>Dec</option>
                  </select>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='YYYY' />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  Mobile Number
                  <p className='text-xs'> {'Number must be 8 digits'}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Mobile Number' />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  Email Address
                  <p className='text-xs'> {'Please enter a valid email address'}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='Email Address' />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  Referral Code
                  <p className='text-xs'> (Optional)</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                </div>
              </div>
            </div>
            <Link to='/SignUpOTPVerification'>
              <ButtonBlack className='mx-0 px-20 ml-0' title='NEXT' /></Link>
          </>
        )}
        {state === 2 && (
          <div className='space-y-10'>
            <div className='bg-[#f0f1eb] py-[56px] px-4 md:px-10 spac'>
              <p className='text-3xl uppercase font-medium'>CREATE MEMBERSHIP PIN</p>
              <div className='grid grid-cols-12 gap-x-10'>
                <div className='col-span-12 md:col-span-5 py-5 md:border-r border-[#c5c6bc] md:pr-5'>
                  <p className='text-xl uppercase font-medium'>Create Your 4-digit Card PIN</p>
                  <p>
                    Your <strong>4-digit PIN</strong> will be used for Sands Rewards transactions at Marina Bay Sands.
                  </p>
                </div>
                <div className='col-span-12 md:col-span-7 py-5 grid grid-cols-2 gap-x-5'>
                  <div className='flex flex-col gap-y-2'>
                    <p>Create PIN</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>Confirm PIN</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#f0f1eb] py-[56px] px-4 md:px-10'>
              <p className='text-3xl uppercase font-medium'>CREATE DIGITAL ACCOUNT
              </p>
              <div className='grid grid-cols-12 gap-x-10'>
                <div className='col-span-12 md:col-span-5 py-5 md:border-r border-[#c5c6bc] md:pr-5'>
                  <p className='text-xl uppercase font-medium'>Digital Account(s)
                  </p>
                  <p>
                    This <strong>digital account (username and password)</strong> will be used to login into our digital platforms. Your existing membership ID and PIN will still be required for Sands Rewards transactions at Marina Bay Sands.

                  </p>
                </div>
                <div className='col-span-12 md:col-span-7 py-5 space-y-5 '>
                  <div className='flex flex-col gap-y-2'>
                    <p>Username</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>Password</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>Confirm Password</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                </div>
              </div>
            </div>
            <Link to='/signup-successful'>
              <ButtonBlack className='mx-0 px-20 ml-0' title='Create' />
            </Link>
          </div>
        )}
        {state === 3 && (
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
    </div>
  )
}


export default Signup
