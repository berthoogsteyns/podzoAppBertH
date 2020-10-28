import * as React from 'react'
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { useQuery } from '../../../hooks/useQuery'
import { searchRestaurant } from '../../../redux/action/restaurantActionCreators'
import { RestaurantState } from '../../../redux/slice/restaurant'
import { Contact } from '../../views/Contact/Contact'
import { Footer } from '../../views/Footer/Footer'
import { RestaurantBody } from '../../views/RestaurantBody/RestaurantBody'

import './RestaurantList.scss'

export const RestaurantList = () => {
  const query = useQuery()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const searchParam = query.get('search')

  // const countParam = query.get('start')

  const { list, isLoadingList, results_found: results_fount } = useSelector(
    (state: RestaurantState) => state
  )

  const [filter, setFilter] = useState('')
  const [start, setStart] = useState(0)

  useEffect(() => {
    dispatch(searchRestaurant(searchParam, start))
  }, [searchParam, start])

  const searchHeaderTitle = isLoadingList
    ? 'searching...'
    : `${results_fount} restaurants found `

  const handleChange = (toFilter: string) => {
    setFilter(toFilter)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/restaurants?search=${filter}`)
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
            <BeatLoader size={25} color={'#ff6000'} />
          ) : (
            list.map((r, i) => <RestaurantBody key={i} restaurant={r} />)
          )}
        </div>
        <button
          onClick={(e) => {
            setStart(start + 20)
            console.log('start',start);
            
            dispatch(searchRestaurant(searchParam, start))
          }}
          className='l-container-restaurants-button'
        >
          show more
        </button>
      </div>

      <Contact />
      <Footer />
    </div>
  )
}
