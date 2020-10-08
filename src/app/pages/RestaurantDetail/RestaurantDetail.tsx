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
import { useLocation, useParams } from 'react-router-dom'

type Props = {
  //restaurant: Restaurant
}

export const RestaurantDetail = React.memo((props: Props) => {
  const location = useLocation()

  const restaurant = location.state as Restaurant

  const [key, setKey] = React.useState('home')

  const ratingItem = (rating: Rating) => {
    return (
      <div className='rating'>
        <div className='rating-image'></div>

        <div className='rating-reviewer'>
          <h3 className='rating-reviewer-name'>{rating.reviewer_name}</h3>
          <p className='rating-reviewer-stars'>{rating.stars} stars</p>
        </div>
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
    <div className='d-container'>
      <div className='d-container-top'>
        <img className='d-container-top-restaurantLogo' src={restaurantLogo} />
        <div className='d-container-top-right'>
          <h1 className='d-container-top-right-name'>{restaurant.name}</h1>
          <p className='d-container-top-right-location'>
            {restaurant.location}
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
                    {restaurant.name}
                  </p>
                  <h3 className='d-container-bottom-left-tabs-heading'>
                    PHONE
                  </h3>
                  <p>{restaurant.phone}</p>
                  <h3 className='d-container-bottom-left-tabs-heading'>
                    WEBSITE
                  </h3>
                  <p>{restaurant.website}</p>
                  <h3>LOCATION</h3>
                  <p>{restaurant.location}</p>
                  <h3>ONLINE DELIVERY</h3>
                  <p>{restaurant.online_delivery ? 'Yes' : 'No'}</p>
                  <h3>TABLE BOOKING</h3>
                  <p>{restaurant.table_booking ? 'Yes' : 'No'}</p>
                  <h3>CUISINE</h3>
                  <p>{restaurant.cuisine}</p>
                  <h3>CURRENCY</h3>
                  <p>{restaurant.currency}</p>
                  <h3>PRICE RANGE</h3>
                  <p>{restaurant.price_range}</p>
                </div>
              </TabPanel>
              <TabPanel>
                {restaurant.ratings.map((r) => ratingItem(r))}
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className='d-container-bottom-right'>
          <h2 className='d-container-bottom-right-header'>Menu</h2>
          <div className='d-container-bottom-right-breakfast'>
            <h2>Breakfast</h2>
            <div className='d-container-bottom-right-breakfast-products'>
              {restaurant.menu.breakfast.map((p) => menuItem(p))}
            </div>
          </div>
          <div className='d-container-bottom-right-lunch'>
            <h2>Luch</h2>
            <div className='d-container-bottom-right-lunch-products'>
              {restaurant.menu.lunch.map((p) => menuItem(p))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
})
