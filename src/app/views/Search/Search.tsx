import * as React from 'react'
import { Restaurant } from '../../../models/Restaurant'
import './Search.scss'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
type Props = {
  restaurants: Array<Restaurant>
}

export const Search = (props: Props) => {
  const [filter, setFilter] = React.useState('')

  const navigate = useNavigate()

  const [filteredRestaurants, setFilteredRestaurants] = React.useState(
    props.restaurants
  )
  const handleChange = (toFilter: string) => {
    console.log("handle change", toFilter)

    setFilter(toFilter)

    setFilteredRestaurants(
      props.restaurants.filter(
        (r) =>
          r.name.toLowerCase().includes(filter.toLowerCase()) ||
          r.location.toLowerCase().includes(filter.toLowerCase())
      )
    )

    console.log('filter t', filteredRestaurants)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("handle search")
    e.preventDefault()
    if (e.key == 'Enter') {
      navigate('/restaurants', {state: filteredRestaurants})
    } 
    // else {
    //   setFilteredRestaurants(
    //     props.restaurants.filter(
    //       (r) =>
    //         r.name.toLowerCase().includes(filter.toLowerCase()) ||
    //         r.location.toLowerCase().includes(filter.toLowerCase())
    //     )
    //   )
    // }
  }

  return (
    <div className='_container'>
      <div className='_container-content'>
        <h1 className='_container-content-header'>Find nearby restaurants</h1>
        <form className='_container-content-search'>
          <input
            className='_container-content-search-input'
            value={filter}
            type='input'
            placeholder='Search restaurants'
            onKeyPress={(e) => handleSearch(e)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch className='_container-content-search-icon' />
        </form>
      </div>
    </div>
  )
}
