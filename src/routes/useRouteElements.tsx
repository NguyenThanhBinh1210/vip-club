import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import TheSandsCollection from '~/pages/Stay/TheSandsCollection'
import ThePaizaCollection from '~/pages/Stay/ThePaizaCollection'
import Packages from '~/pages/Stay/Packages'
import SkyparkObservationDeck from '~/pages/Stay/SkyparkObservationDeck'
import InfinityPool from '~/pages/Stay/InfinityPool'
import Shopping from '~/pages/Shop/Shopping'
import StoreDirectory from '~/pages/Shop/StoreDirectory'
import Restaurants from '~/pages/Dine/Restaurants'
import RooftopDining from '~/pages/Dine/RooftopDining'
import WaterfrontDining from '~/pages/Dine/WaterfrontDining'
import FineDining from '~/pages/Dine/FineDining'
import More from '~/pages/More'
import WhatOnAtMbs from '~/pages/WhatOnAtMbs'
import Booking from '~/pages/Booking'

const useRouteElements = () => {
  const routeElements = useRoutes([

    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/hotel/the-sands-collection',
      element: (
        <HomeLayout>
          <TheSandsCollection />
        </HomeLayout>
      )
    },
    {
      path: '/hotel/the-paiza-collection',
      element: (
        <HomeLayout>
          <ThePaizaCollection />
        </HomeLayout>
      )
    },
    {
      path: '/hotel/packages',
      element: (
        <HomeLayout>
          <Packages />
        </HomeLayout>
      )
    },
    {
      path: '/attractions/skypark-observation-deck',
      element: (
        <HomeLayout>
          <SkyparkObservationDeck />
        </HomeLayout>
      )
    },
    {
      path: '/attractions/infinity-pool',
      element: (
        <HomeLayout>
          <InfinityPool />
        </HomeLayout>
      )
    },
    {
      path: '/shopping',
      element: (
        <HomeLayout>
          <Shopping />
        </HomeLayout>
      )
    },
    {
      path: '/shopping/store-directory',
      element: (
        <HomeLayout>
          <StoreDirectory />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants',
      element: (
        <HomeLayout>
          <Restaurants />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants/rooftop-dining',
      element: (
        <HomeLayout>
          <RooftopDining />
        </HomeLayout>
      )
    },
    {
      path: '/guides/party-drinks-mbs/waterfront-bars-marina-bay',
      element: (
        <HomeLayout>
          <WaterfrontDining />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants/fine-dining',
      element: (
        <HomeLayout>
          <FineDining />
        </HomeLayout>
      )
    },
    {
      path: '/more',
      element: (
        <HomeLayout>
          <More />
        </HomeLayout>
      )
    },
    {
      path: '/booking',
      element: (
        <HomeLayout>
          <Booking />
        </HomeLayout>
      )
    },
    {
      path: '/guides/exceptional-experiences/whats-on-at-mbs',
      element: (
        <HomeLayout>
          <WhatOnAtMbs />
        </HomeLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
