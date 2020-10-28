import { Restaurant } from '../../models/Restaurant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store/store'
import ApiClient, {
  parseToMenu,
  parseToRestaurants,
  parseToReview,
  parseToRestaurant
} from '../../services/api'
import restaurantSlice from '../slice/restaurant'
import {
  loadList,
  listSuccess,
  listFail,
  loadDetail,
  detailSuccess,
  detailFail,
  didSearch
} from '../slice/restaurant'
const api = new ApiClient()

export const searchRestaurant = (query: string, start = 0): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(loadList({}))
    const response = await api.getRestaurantsBySearch(query, start)
    const restaurants = parseToRestaurants(response)
    dispatch(didSearch(response.results_found))
    dispatch(listSuccess(restaurants))
  } catch (err) {
    console.error('not found', err)
    dispatch(listFail([]))
  }
}

export const setDetail = (restaurant: Restaurant): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(loadDetail({}))
    const reviewsJson = api.getRestaurantReviews(restaurant.id)
    const menuJson = api.getRestaurantMenu(restaurant.id)

    const [reviews, menu] = [await reviewsJson, await menuJson]

    const withReviews: Restaurant = {
      ...restaurant,
      all_reviews: parseToReview(reviews),
      menu: parseToMenu(menu)
    }

    dispatch(detailSuccess(withReviews))
  } catch (err) {
    console.log('fail')
    dispatch(detailFail(<Restaurant>{}))
  }
}

export const getRestaurant = (id): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(loadDetail({}))

    const restaurantJson = await api.getRestaurant(id)

    const restaurant = parseToRestaurant(restaurantJson)

    const reviewsJson = api.getRestaurantReviews(restaurant.id)
    const menuJson = api.getRestaurantMenu(restaurant.id)

    const [reviews, menu] = [await reviewsJson, await menuJson]

    const withReviews: Restaurant = {
      ...restaurant,
      all_reviews: parseToReview(reviews),
      menu: parseToMenu(menu)
    }

    dispatch(detailSuccess(withReviews))
  } catch (err) {
    console.error(err)
    dispatch(detailFail(<Restaurant>{}))
  }
}
