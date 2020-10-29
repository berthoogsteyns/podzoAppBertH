import * as React from 'react'
import podzo from './assets/PODZO.png'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
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

  const isLaptop = useMediaQuery({ minDeviceWidth: 500 })

  return (
    <Router>
      <Navbar expand='lg' className='justify-content-between'>
        <Navbar.Brand className='nav-logo'>
          <Link to='/'>
            <img src={podzo} className='nav-logo-image' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='nav-links mr-auto'>
            <Link to='/'>
              <p className='nav-links-link'>Home</p>
            </Link>
            <Link to='/restaurants' className=''>
              <p className='nav-links-link'>Restaurants</p>
            </Link>
            <Link to='/contact'>
              <p className='nav-links-link'>Contact</p>
            </Link>
            {isLaptop ? <div className='nav-links-vl'></div> : ''}

            <Link to=''>
              <p className='nav-links-link'>Login</p>
            </Link>
            <Nav.Link className='divider'></Nav.Link>
            <Link to='' className='nav-links-signup'>
              <p className='nav-links-link'>Sign up</p>
            </Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
