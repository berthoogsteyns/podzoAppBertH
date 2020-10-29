import * as React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack } from 'react-icons/io'
import './RestaurantCarousel.scss'
import { Restaurant } from '../../../models/Restaurant'
import { RestaurantBody } from '../RestaurantBody/RestaurantBody'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RestaurantState } from '../../../redux/slice/restaurant'
import { searchRestaurant } from '../../../redux/action/restaurantActionCreators'

type Props = {}

export const RestaurantCarousel = (props: Props) => {
  const { list } = useSelector((state: RestaurantState) => state)

  // const dispatch = useDispatch()

  // dispatch(searchRestaurant(''))

  const navigate = useNavigate()

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px'
  }
  
  return (
    <div className='carousel-container'>
      <h1 className='carousel-container-header'>Our restaurants</h1>
      <div className='carousel-container-slider'>
        <Slider {...config}>
          {list.map((r, i) => {
            return <RestaurantBody key={i} restaurant={r} />
          })}
        </Slider>
      </div>

      <button
        onClick={(_e) => navigate('restaurants')}
        className='carousel-container-button'
      >
        Explore more
      </button>
    </div>
  )
}
