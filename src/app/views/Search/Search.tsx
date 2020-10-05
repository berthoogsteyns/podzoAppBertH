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
    if (e.key == 'Enter') {
      return <Navigate to='/restaurant' />
    } else {
      setFilteredRestaurants(
        props.restaurants.filter(
          (r) =>
            r.name.toLowerCase().includes(filter.toLowerCase()) ||
            r.location.toLowerCase().includes(filter.toLowerCase())
        )
      )
    }

    e.preventDefault()
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
            onChange={(e) => handleChange(e.target.value)}
            
            onKeyPress={(e) => handleSearch(e)}
          />
          <BsSearch className='_container-content-search-icon' />
        </form>
      </div>
    </div>
  )
}
