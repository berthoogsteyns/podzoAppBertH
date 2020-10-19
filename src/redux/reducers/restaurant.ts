import { Restaurant } from '../../models/Restaurant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store/store'
import ApiClient, { parseToMenu, parseToRestaurant, parseToReview } from '../../services/api'

export type RestaurantState = {
  list: Restaurant[]
  isLoadingList: boolean
  detail: Restaurant
  isLoadingDetail: boolean
  results_fount: number
}

const initialState: RestaurantState = {
  list: [],
  isLoadingList: true,
  detail: <Restaurant>{},
  isLoadingDetail: true,
  results_fount: 0
}

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: initialState,
  reducers: {
    loadList: (state, action) => {
      state.isLoadingList = true
    },
    listSuccess: (state, action: PayloadAction<Restaurant[]>) => {
      state.list = action.payload
      state.isLoadingList = false
    },
    listFail: (state, action: PayloadAction<Restaurant[]>) => {
      ;(state.list = action.payload), (state.isLoadingList = false)
    },
    loadDetail: (state, action) => {
      state.isLoadingList = true
    },
    detailSuccess: (state, action: PayloadAction<Restaurant>) => {
      state.detail = action.payload
      state.isLoadingDetail = false
    },
    detailFail: (state, action: PayloadAction<Restaurant>) => {
      ;(state.detail = action.payload), (state.isLoadingDetail = false)
    },
    didSearch: (state, action: PayloadAction<number>) => {
      state.results_fount = action.payload
    }
  }
})

const api = new ApiClient()

export const searchRestaurant = (query: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const response = await api.getRestaurantsBySearch(query)
    console.log('reponse', response)
    const restaurants = parseToRestaurant(response)
    dispatch(restaurantSlice.actions.didSearch(response.results_found))
    dispatch(restaurantSlice.actions.listSuccess(restaurants))
  } catch (err) {
    console.log('not found', err)
    dispatch(restaurantSlice.actions.listFail([]))
  }
}

export const setDetail = (restaurant: Restaurant): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const reviewsJson = api.getRestaurantReviews(restaurant.id)
    const menuJson = api.getRestaurantMenu(restaurant.id)

    const [reviews, menu] = [await reviewsJson, await menuJson]
    
    const withReviews: Restaurant = {
      ...restaurant,
      all_reviews: parseToReview(reviews),
      menu: parseToMenu(menu)
    }

    dispatch(restaurantSlice.actions.detailSuccess(withReviews))
  } catch (err) {
    console.log("fail")
    dispatch(restaurantSlice.actions.detailFail(<Restaurant>{}))
  }
}

export const {
  loadList,
  listSuccess,
  listFail,
  loadDetail,
  detailSuccess,
  detailFail,
  didSearch
} = restaurantSlice.actions

export default restaurantSlice.reducer
