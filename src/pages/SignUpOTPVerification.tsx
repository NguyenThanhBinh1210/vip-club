import { useState } from 'react'
import { ButtonBlack } from './Shop/Shopping'
import { useNavigate } from 'react-router-dom'

const SignUpOTPVerification = () => {
  const [stage, setStage] = useState(1)
  const navigate = useNavigate()
  return (
    <div className='px-4 py-40'>
      <div className='bg-[#f0f1eb] p-10 max-w-2xl mx-auto'>
        <div className='flex flex-col '>
          <div className='flex flex-col gap-y-2'>
            <p className='text-2xl uppercase font-medium'>OTP Verification</p>
            {stage === 1 && (
              <p className='text-sm'>
                Please select a channel to receive the one-time password (OTP) as part of the verification process.
              </p>
            )}
            {stage === 2 && (
              <p className='text-sm'>
                An email containing a one-time password (OTP) has been sent to your email address
                T***************@GMAIL.COM.
              </p>
            )}
          </div>
          {stage === 1 && (
            <div className='border w-max mx-auto border-[#c5c6bc] rounded-md p-3 px-20 flex flex-col items-center gap-y-1 uppercase cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='size-12'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
              Email OTP
            </div>
          )}
          {stage === 2 && (
            <>
              <input type='text' className='border-b border-[#c5c6bc] p-1 w-full mt-10 mb-2' placeholder='Enter OTP' />
              <p className='text-sm'>Resend a new OTP in 01:16</p>
            </>
          )}
          <div className='grid grid-cols-2 gap-2'>
            {stage === 1 && <ButtonBlack onClick={() => setStage(2)} className='w-full mx-0 mb-0 ' title='Proceed' />}
            {stage === 2 && (
              <ButtonBlack
                onClick={() => {
                  navigate('/signup', {
                    state: {
                      email: 'T***************@GMAIL.COM',
                      state: 2
                    }
                  })
                }}
                className='w-full mx-0 mb-0 '
                title='Verify'
              />
            )}
            <ButtonBlack
              // onClick={() => setStage(1)}
              className='w-full mx-0 mb-0 bg-transparent !text-black border-black border  hover:bg-transparent '
              title='Back'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpOTPVerification
