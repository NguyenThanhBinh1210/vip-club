import { LayoutPropsInterface } from '~/types/base.type'

const LoginLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div>
      {children}
      <div className='text-center text-sm fixed bottom-0 z-0 w-full py-2 bg-[#f0f1eb]'>
        © 2025 Sands LifeStyle. All Rights Reserved.
      </div>
    </div>
  )
}

export default LoginLayout
