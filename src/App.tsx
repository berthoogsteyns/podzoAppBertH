import * as React from 'react'
import podzo from './assets/PODZO.png'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './app/pages/Home/Home'
import { RestaurantList } from './app/pages/RestaurantList/RestaurantList'
import { Contact } from './app/views/Contact/Contact'
import { Search } from './app/views/Search/Search'
import { Restaurant } from './models/Restaurant'
import { RestaurantDetail } from './app/pages/RestaurantDetail/RestaurantDetail'

const App = () => {
  const resto: Restaurant = {
    id: 0,
    name: 'kugasima caffee',
    phone: '+250 000 000',
    website: 'www.resto.rw',
    location: 'kimihurura', //KG 782 st, 8,
    online_delivery: true,
    table_booking: false,
    cuisine: 'Cafe',
    currency: '$',
    price_range: 2,
    ratings: [
      { review: 'this place is awesome!', reviewer_name: 'lila', stars: 5 }
    ],
    menu: {
      breakfast: [{ product_name: 'pancakes', price: 5000 }],
      lunch: [{ product_name: 'fish & rice', price: 9000 }]
    }
  }

  const test = [...Array(10)].map((_v, i) => {
    let r = resto
    r.id = i + 1
    console.log(r)
    return r
  })

  const mrChips = {
    ...resto,
    name: 'mr. chips',
    location: 'nyarutarama',
    menu: {
      breakfast: [{ product_name: 'pancakes', price: 5000 }],
      lunch: [{ product_name: 'fish & rice', price: 9000 }]
    }
  }

  test.push(mrChips)

  const [restaurants, setRestaurants] = React.useState(
    // [...Array(10)].map((_v, i) => {
    //   let r = resto

    //   r.id = i + 1
    //   return r
    // })
    test
  )

  return (
    <Router>
      <nav className='nav'>
        <Link to='/' className='nav-logo'>
          <img src={podzo} className='nav-logo-image' />
        </Link>
        <div className="nav-links">
          <Link to='/'>
            <p className='nav-links-link'>Home</p>
          </Link>
          <Link to='/restaurants' className=''>
            <p className='nav-links-link'>Restaurants</p>
          </Link>
          <Link to='/contact'>
            <p className='nav-links-link'>Contact</p>
          </Link>
          <div className='nav-links-vl'></div>
          <Link to=''>
            <p className='nav-links-link'>Login</p>
          </Link>
          <Link to='' className='nav-links-signup'>
            <p className='nav-links-link'>Sign up</p>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home restaurants={restaurants} />} />
        <Route
          path='/restaurants'
          element={<RestaurantList restaurants={restaurants} />}
        />
        <Route path='/restaurants/detail' element={<RestaurantDetail />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
