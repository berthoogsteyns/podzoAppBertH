import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Restaurant } from '../../../models/Restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'

import './RestaurantList.scss'

type Props = { restaurants: Array<Restaurant> } //restaurants: Array<Restaurant>

export const RestaurantList = React.memo((props: Props) => {
  const location = useNavigate()
  
  

  return (
    <div className='l-container'>
      <div className='l-container-restaurants'>
        <h2 className='l-container-restaurants-header'>Our restaurants</h2>
        {props.restaurants.map((r, i) => {
          return <RestaurantBody key={i} restaurant={r} />
        })}
      </div>

      <Contact />
      <Footer />
    </div>
  )
})
