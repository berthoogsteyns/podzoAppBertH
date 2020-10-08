import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import food from '../../../assets/food.png'
import restaurantLogo from '../../../assets/restaurant.png'
import { Restaurant } from '../../../models/Restaurant'
import './RestaurantBody.scss'

type Props = {
  restaurant: Restaurant
}

export const RestaurantBody = (props: Props) => {
  
  const navigate = useNavigate()
  return (
    <div onClick={e => navigate('/restaurants/detail', {state: props.restaurant})} className='body'>
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
