import * as React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { Restaurant } from '../../../models/Restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'
import { Search } from '../../views/Search/Search'

import './RestaurantList.scss'

type Props = { restaurants: Array<Restaurant> }

export const RestaurantList = React.memo((props: Props) => {
  const location = useLocation()

  const restaurants = location.state as Array<Restaurant>

  const isSet = (value) => value != null && value != undefined && value != []

  const didSearch = isSet(restaurants)

  console.log(restaurants)

  console.log(didSearch)

  const searchHeaderTitle = didSearch ? `${restaurants.length} found restaurants` : `${props.restaurants.length} found restaurants`

  const [filter, setFilter] = React.useState('')

  const navigate = useNavigate()

  const [filteredRestaurants, setFilteredRestaurants] = React.useState(
    props.restaurants
  )
  const handleChange = (toFilter: string) => {
    setFilter(toFilter)

    setFilteredRestaurants(
      props.restaurants.filter(
        (r) =>
          r.name.toLowerCase().includes(filter.toLowerCase()) ||
          r.location.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.key == 'Enter') {
      navigate('restaurants', { state: filteredRestaurants })
    } else {
      setFilteredRestaurants(
        props.restaurants.filter(
          (r) =>
            r.name.toLowerCase().includes(filter.toLowerCase()) ||
            r.location.toLowerCase().includes(filter.toLowerCase())
        )
      )
    }
  }

  const withProps = () => {
    return props.restaurants.map((r, i) => (
      <RestaurantBody key={i} restaurant={r} />
    ))
  }

  const withSearch = () => {
    return restaurants.map((r, i) => <RestaurantBody key={i} restaurant={r} />)
  }

  return (
    <div className='l-container'>
      <div className='l-container-search'>
        <h1 className='l-container-search-header'>{searchHeaderTitle}</h1>
        <form className='l-container-search-searchBox'>
          <input
            className='l-container-search-searchBox-input'
            value={filter}
            type='input'
            placeholder='Search restaurants'
            onChange={(e) => handleChange(e.target.value)}
            onKeyPress={(e) => handleSearch(e)}
          />
          <BsSearch className='l-container-search-searchBox-icon' />
        </form>
      </div>
      <div className='l-container-restaurants'>
        <h2 className='l-container-restaurants-header'>Our restaurants</h2>
        {didSearch ? withSearch() : withProps()}
      </div>

      <Contact />
      <Footer />
    </div>
  )
})
