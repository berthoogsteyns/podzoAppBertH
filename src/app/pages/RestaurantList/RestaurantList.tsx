import * as React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RestaurantState } from '../../../redux/reducers/restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'
import { Search } from '../../views/Search/Search'

import './RestaurantList.scss'

export const RestaurantList = () => {
  const { list, isLoadingList } = useSelector((state: RestaurantState) => state)

  console.log('list', list)

  const searchHeaderTitle = `${list.length} restaurants found `

  const [filter, setFilter] = React.useState('')

  const navigate = useNavigate()

  const handleChange = (toFilter: string) => {
    setFilter(toFilter)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // navigate('/restaurants', { state: filteredRestaurants })
  }

  return (
    <div className='l-container'>
      <div className='l-container-search'>
        <h1 className='l-container-search-header'>{searchHeaderTitle}</h1>
        <form
          className='l-container-search-searchBox'
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            className='l-container-search-searchBox-input'
            value={filter}
            type='input'
            placeholder='Search restaurants'
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch className='l-container-search-searchBox-icon' />
        </form>
      </div>
      <div className='l-container-restaurants'>
        <h2 className='l-container-restaurants-header'>Our restaurants</h2>
        <div className='l-container-restaurants-container'>
          {isLoadingList ? (
            <div></div>
          ) : (
            list.map((r, i) => <RestaurantBody key={i} restaurant={r} />)
          )}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  )
}
