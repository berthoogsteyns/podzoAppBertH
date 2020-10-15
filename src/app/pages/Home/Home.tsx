import * as React from 'react'
import { useSelector } from 'react-redux'
import { Restaurant } from '../../../models/Restaurant'
import { RestaurantState } from '../../../redux/reducers/restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'
import { RestaurantCarousel } from '../../views/RestaurantCaroursel/RestaurantCarousel'
import { Search } from '../../views/Search/Search'
import { Tutorial } from '../../views/Tutorial/Tutorial'
import { RestaurantDetail } from '../RestaurantDetail/RestaurantDetail'

import './Home.scss'

// restaurants: Array<Restaurant>
type Props = { }

export const Home = React.memo((props: Props) => {

  const {isLoadingList} = useSelector((state:RestaurantState) => state)
  
  return (
    <div className='test'>
      <Search />
      <RestaurantCarousel />
      <Tutorial />
      <Contact />
      <Footer />
    </div>
  )
})
