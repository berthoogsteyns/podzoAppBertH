import * as React from 'react'
import './Search.scss'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchRestaurant } from '../../../redux/reducers/restaurant'

export const Search = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = React.useState('')

  const navigate = useNavigate()

  const handleChange = (toFilter: string) => {
    setFilter(toFilter)
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    dispatch(searchRestaurant(filter))

    navigate('/restaurants')
  }

  return (
    <div className='_container'>
      <div className='_container-content'>
        <h1 className='_container-content-header'>Find nearby restaurants</h1>
        <form
          className='_container-content-search'
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            className='_container-content-search-input'
            value={filter}
            type='input'
            placeholder='Search restaurants'
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch className='_container-content-search-icon' />
        </form>
      </div>
    </div>
  )
}
