import { useEffect } from 'react'
import ScrollToTop from './components/scrollTop/scrollTop'
import useRouteElements from './routes/useRouteElements'
import CSKH from './components/CSKH'

const App = () => {
  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname === '/booking') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [])
  const routeElements = useRouteElements()
  return (
    <>
      <ScrollToTop />
      <CSKH />
      {routeElements}
    </>
  )
}

export default App
