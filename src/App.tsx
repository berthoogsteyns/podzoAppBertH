import * as React from 'react'
import podzo from './assets/PODZO.png'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.scss'
import {Provider} from 'react-redux'
import { Home } from './app/pages/Home/Home'
import { RestaurantList } from './app/pages/RestaurantList/RestaurantList'
import { Contact } from './app/views/Contact/Contact'
import { Search } from './app/views/Search/Search'
import { Restaurant } from './models/Restaurant'
import { RestaurantDetail } from './app/pages/RestaurantDetail/RestaurantDetail'


// TODO mobile responsive
// TODO api
// 
const App = () => {

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
        <Route path='/' element={<Home/>} />
        <Route
          path='/restaurants'
          element={<RestaurantList/>}
        />
        <Route path='/restaurants/detail' element={<RestaurantDetail />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
