import * as React from 'react'
import { Restaurant } from '../../../models/Restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'
import { RestaurantCarousel } from '../../views/RestaurantCaroursel/RestaurantCarousel'
import { Search } from '../../views/Search/Search'
import { Tutorial } from '../../views/Tutorial/Tutorial'
import { RestaurantDetail } from '../RestaurantDetail/RestaurantDetail'

import './Home.scss'

type Props = { restaurants: Array<Restaurant> }

export const Home = React.memo((props: Props) => {
  return (
    <div className='test'>
      <Search restaurants={props.restaurants}/>
      <RestaurantCarousel restaurants={props.restaurants} />
      <Tutorial />
      <Contact />
      <Footer />
      {/* <RestaurantDetail restaurant={props.restaurants[0]} /> */}
    </div>
  )
})
