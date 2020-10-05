import * as React from 'react'
import food from '../../../assets/food.png'
import restaurantLogo from '../../../assets/restaurant.png'
import { Restaurant } from '../../../models/Restaurant'
import './RestaurantBody.scss'

type Props = {
  restaurant: Restaurant
}

export const RestaurantBody = (props: Props) => {
  // const history = useHistory()
  const redirect = () => {
    // history.push({pathName: '/:slug', restaurant: props.restaurant})
  }
  return (
    <div onClick={e => redirect} className='body'>
      <img className='body-food' src={food} />
      <div className='body-info'>
        <img className='body-info-restaurantLogo' src={restaurantLogo} />
        <p className='body-info-restaurantName'>{props.restaurant.name}</p>
        <div className='body-info-bottom'>
          <p className='body-info-bottom-currency'>
            {props.restaurant.currency}
          </p>
          <span className='body-info-bottom-divider'> - </span>
          <p className='body-info-bottom-location'>
            {props.restaurant.location}
          </p>
        </div>
      </div>
    </div>
  )
}
