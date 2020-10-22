import * as React from 'react'
import { Restaurant } from '../../../models/Restaurant'
import restaurantLogo from '../../../assets/restaurant.png'
import { Contact } from '../../views/Contact/Contact'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { PacmanLoader } from 'react-spinners'
import { css } from '@emotion/core'
import 'react-tabs/style/react-tabs.css'
import './RestaurantDetail.scss'
import { Review } from '../../../models/Review'
import { Dish, DailyMenuCategorie, Menu } from '../../../models/Menu'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantState } from '../../../redux/reducers/restaurant'
import { useSelector } from 'react-redux'

type Props = {
  //restaurant: Restaurant
}

const placeHolderMenu: Menu = {
  daily_menu: [
    {
      daily_menu_id: 1,
      start_date: '01/01/2020',
      end_date: '01/01/2020',
      name: 'Breakfast',
      dishes: [
        {
          dish_id: 1,
          name: 'pancakes',
          price: 5000
        },
        {
          dish_id: 1,
          name: 'yogurt & fruit mix',
          price: 5000
        },
        {
          dish_id: 1,
          name: 'eggs & bacon',
          price: 6000
        },
        {
          dish_id: 1,
          name: 'mango smoothy',
          price: 4000
        },
        {
          dish_id: 1,
          name: 'coffee',
          price: 2000
        }
      ]
    }
  ]
}

export const RestaurantDetail = React.memo((props: Props) => {
  const { detail, isLoadingDetail } = useSelector(
    (state: RestaurantState) => state
  )

  const override = css`
    margin: 10rem auto;
  `

  const ratingItem = (rating: Review) => {
    return (
      <div className='rating'>
        <div className='rating-image'></div>

        <div className='rating-reviewer'>
          <h3 className='rating-reviewer-name'>{rating.user.name}</h3>
          <p className='rating-reviewer-stars'>{rating.rating} stars</p>
        </div>
        <p className='rating-review'>{rating.review_text}</p>
      </div>
    )
  }

  const dishItem = (dish: Dish) => {
    return (
      <div className='product'>
        <p className='product-name'>{dish.name}</p>
        <p className='product-price'>{dish.price + ' Frw'}</p>
      </div>
    )
  }

  const menuItem = (menu: DailyMenuCategorie) => {
    return (
      <div className='d-container-bottom-right-menu'>
        <h2>{menu.name}</h2>
        <div className='d-container-bottom-right-menu-dish'>
          {menu.dishes.map((p) => dishItem(p))}
        </div>
      </div>
    )
  }

  return (
    <div className='d-container'>
      {isLoadingDetail ? (
        <PacmanLoader css={override} color={'#ff6000'} />
      ) : (
        <div>
          <div className='d-container-top'>
            <img
              className='d-container-top-restaurantLogo'
              src={restaurantLogo}
            />
            <div className='d-container-top-right'>
              <h1 className='d-container-top-right-name'>{detail.name}</h1>
              <p className='d-container-top-right-location'>
                {detail.location.city}
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
                      <h3 className='d-container-bottom-left-tabs-heading'>
                        NAME
                      </h3>
                      <p className='d-container-bottom-left-detail'>
                        {detail.name}
                      </p>
                      <h3 className='d-container-bottom-left-tabs-heading'>
                        PHONE
                      </h3>
                      <p>{detail.phone_numbers}</p>
                      <h3 className='d-container-bottom-left-tabs-heading'>
                        WEBSITE
                      </h3>
                      <p>{detail.url}</p>
                      <h3>LOCATION</h3>
                      <p>{detail.location.city}</p>
                      <h3>ONLINE DELIVERY</h3>
                      <p>{detail.online_delivery ? 'Yes' : 'No'}</p>
                      <h3>TABLE BOOKING</h3>
                      <p>{detail.table_booking ? 'Yes' : 'No'}</p>
                      <h3>CUISINE</h3>
                      <p>{detail.cuisines}</p>
                      <h3>CURRENCY</h3>
                      <p>{detail.currency}</p>
                      <h3>PRICE RANGE</h3>
                      <p>{detail.price_range}</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    {detail.all_reviews.map((r) => ratingItem(r))}
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className='d-container-bottom-right'>
              <h2 className='d-container-bottom-right-header'>Menu</h2>
              {detail.menu
                ? detail.menu.daily_menu.map((m) => menuItem(m))
                : placeHolderMenu.daily_menu.map((m) => menuItem(m))}
            </div>
          </div>
        </div>
      )}
      <Contact />
      <Footer />
    </div>
  )
})
