import logo from '~/assets/logo-01.png'
import { ButtonBlack } from './Shop/Shopping'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='px-4 max-w-xl mx-auto pt-[60px]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='size-20 mx-auto' />
      </Link>
      <div className='flex flex-col gap-y-4'>
        <p className='text-2xl uppercase font-medium text-center'>Login</p>
        <div className='flex flex-col gap-y-2'>
          <p className='text-sm'>Username</p>
          <input placeholder='Email' className='w-full border-b border-[#c5c6bc] py-2' />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p className='text-sm'>Password</p>
          <input type='password' placeholder='Password' className='w-full border-b border-[#c5c6bc] py-2' />
        </div>
        <ButtonBlack title='Login' className='w-full !m-0' />
        <p className='m text-right'>
          Don't have an account? <Link to='/signup' className='text-black underline'>Register Now</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
