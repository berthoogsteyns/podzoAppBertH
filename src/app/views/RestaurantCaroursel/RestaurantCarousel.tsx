import * as React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import './RestaurantCarousel.scss'
import { Restaurant } from '../../../models/Restaurant'
import { RestaurantBody } from '../RestaurantBody/RestaurantBody'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RestaurantState } from '../../../redux/slice/restaurant'
import { searchRestaurant } from '../../../redux/action/restaurantActionCreators'
import { useMediaQuery } from 'react-responsive'

type Props = {}

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='arrow arrow-next' onClick={onClick}>
      <IoIosArrowForward />
    </div>
  )
}

const PreviousArrow = (props) => {
  const { onClick } = props
  return (
    <div className='arrow arrow-prev' onClick={onClick}>
      <IoIosArrowBack />
    </div>
  )
}

export const RestaurantCarousel = (props: Props) => {
  const { list } = useSelector((state: RestaurantState) => state)

  // const dispatch = useDispatch()

  // dispatch(searchRestaurant(''))

  const navigate = useNavigate()

  const isMobile = useMediaQuery({ maxDeviceWidth: 500 })

  const config = isMobile
    ? {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />
      }
    : {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '80px',
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />
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
