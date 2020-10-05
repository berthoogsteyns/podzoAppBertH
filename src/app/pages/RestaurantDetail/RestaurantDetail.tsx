import * as React from 'react'
import { Restaurant } from '../../../models/Restaurant'
import restaurantLogo from '../../../assets/restaurant.png'
import { Contact } from '../../views/Contact/Contact'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './RestaurantDetail.scss'
import { Rating } from '../../../models/Rating'
import { Product } from '../../../models/Product'
import { Footer } from '../../views/Footer/Footer'
import { useParams } from 'react-router-dom'

type Props = {
  restaurant: Restaurant
}

export const RestaurantDetail = React.memo((props: Props) => {
  const { restaurant } = useParams()

  const [key, setKey] = React.useState('home')

  const ratingItem = (rating: Rating) => {
    return (
      <div className='rating'>
        <div className='rating-picture'></div>
        <h3 className='rating-reviewer'>{rating.reviewer_name}</h3>
        <p className='rating-stars'>{rating.stars} stars</p>
        <p className='rating-review'>{rating.review}</p>
      </div>
    )
  }

  const menuItem = (product: Product) => {
    return (
      <div className='product'>
        <p className='product-name'>{product.product_name}</p>
        <p className='product-price'>{product.price + ' Frw'}</p>
      </div>
    )
  }

  return (
    // <h1>Restaurant detail</h1>
    <div className='d-container'>
      <div className='d-container-top'>
        <img className='d-container-top-restaurantLogo' src={restaurantLogo} />
        <div className='d-container-top-right'>
          <h1 className='d-container-top-right-name'>
            {props.restaurant.name}
          </h1>
          <p className='d-container-top-right-location'>
            {props.restaurant.location}
          </p>
        </div>
      </div>
      <div className='d-container-bottom'>
        <div className='d-container-bottom-left'>
          <div>
            <Tabs>
              <TabList>
                <Tab>INFO</Tab>
                <Tab>RATINGS</Tab>
              </TabList>

              <TabPanel>
                <div className='d-container-bottom-left-tabs'>
                  <h3 className='d-container-bottom-left-tabs-heading'>NAME</h3>
                  <p className='d-container-bottom-left-detail'>
                    {props.restaurant.name}
                  </p>
                  <h3 className='d-container-bottom-left-tabs-heading'>
                    PHONE
                  </h3>
                  <p>{props.restaurant.phone}</p>
                  <h3 className='d-container-bottom-left-tabs-heading'>
                    WEBSITE
                  </h3>
                  <p>{props.restaurant.website}</p>
                  <h3>LOCATION</h3>
                  <p>{props.restaurant.location}</p>
                  <h3>ONLINE DELIVERY</h3>
                  <p>{props.restaurant.online_delivery ? 'Yes' : 'No'}</p>
                  <h3>TABLE BOOKING</h3>
                  <p>{props.restaurant.table_booking ? 'Yes' : 'No'}</p>
                  <h3>CUISINE</h3>
                  <p>{props.restaurant.cuisine}</p>
                  <h3>CURRENCY</h3>
                  <p>{props.restaurant.currency}</p>
                  <h3>PRICE RANGE</h3>
                  <p>{props.restaurant.price_range}</p>
                </div>
              </TabPanel>
              <TabPanel>
                {props.restaurant.ratings.map((r) => ratingItem(r))}
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className='d-container-bottom-right'>
          <h2 className='d-container-bottom-right-header'>Menu</h2>
          <div className='d-container-bottom-right-breakfast'>
            <h2>Breakfast</h2>
            <div className='d-container-bottom-right-breakfast-products'>
              {props.restaurant.menu.breakfast.map((p) => menuItem(p))}
            </div>
          </div>
          <div className='d-container-bottom-right-lunch'>
            <h2>Luch</h2>
            <div className='d-container-bottom-right-lunch-products'>
              {props.restaurant.menu.lunch.map((p) => menuItem(p))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
})
