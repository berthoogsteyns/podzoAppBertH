import * as React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  RestaurantState,
  searchRestaurant
} from '../../../redux/reducers/restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'

import './RestaurantList.scss'

export const RestaurantList = () => {
  const { list, isLoadingList, results_fount } = useSelector(
    (state: RestaurantState) => state
  )

  const dispatch = useDispatch()

  const searchHeaderTitle = `${results_fount} restaurants found `

  const [filter, setFilter] = React.useState('')

  const handleChange = (toFilter: string) => {
    setFilter(toFilter)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchRestaurant(filter))
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
