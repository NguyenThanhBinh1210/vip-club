import { useState } from "react";

export const Select = ({
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
    <div className='relative w-max'>
      <div
        className={`  py-1.5 t uppercase   gap-x-10 text-sm flex justify-between items-center cursor-pointer ${classNames?.header}`}
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