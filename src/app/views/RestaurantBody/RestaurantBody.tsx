import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import food from '../../../assets/food.png'
import restaurantLogo from '../../../assets/restaurant.png'
import { Restaurant } from '../../../models/Restaurant'
import { setDetail } from '../../../redux/action/restaurantActionCreators'

import './RestaurantBody.scss'

type Props = {
  restaurant: Restaurant
  key: number
}

export const RestaurantBody = (props: Props) => {
  const imageUrl = props.restaurant.featured_image

  const dispatch = useDispatch()

  const navigate = useNavigate()
  return (
    <div
      onClick={(e) => {
        dispatch(setDetail(props.restaurant))
        navigate(`/restaurants/detail?id=${props.restaurant.id}`)
      }}
      className='body'
    >
      <img className='body-food' src={imageUrl === '' ? food : imageUrl} />
      <div className='body-info'>
        <img className='body-info-restaurantLogo' src={restaurantLogo} />
        <p className='body-info-restaurantName'>{props.restaurant.name}</p>
        <div className='body-info-bottom'>
          <p className='body-info-bottom-currency'>
            {props.restaurant.currency}
          </p>
          <span className='body-info-bottom-divider'> - </span>
          <p className='body-info-bottom-location'>
            {props.restaurant.location.city}
          </p>
        </div>
      </div>
    </div>
  )
}
