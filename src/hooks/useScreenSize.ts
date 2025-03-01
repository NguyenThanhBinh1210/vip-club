import { useState, useEffect } from 'react'

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('md')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 640) {
        setScreenSize('sm')
      } else if (width < 768) {
        setScreenSize('md')
      } else if (width < 1024) {
        setScreenSize('lg')
      } else if (width < 1536) {
        setScreenSize('xl')
      } else {
        setScreenSize('2xl')
      }
    }

    // Gọi handleResize lần đầu để set giá trị ban đầu
    handleResize()

    // Thêm event listener
    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useScreenSize
