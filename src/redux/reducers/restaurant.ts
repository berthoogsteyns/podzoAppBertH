import { Restaurant } from '../../models/Restaurant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store/store'
import ApiClient from '../../services/api'

export type RestaurantState = {
  list: Restaurant[]
  isLoadingList: boolean
  detail: Restaurant
  isLoadingDetail: boolean
  searchQuerry: string
}

const initialState: RestaurantState = {
  list: [],
  isLoadingList: true,
  detail: <Restaurant>{},
  isLoadingDetail: true,
  searchQuerry: ''
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
    }
  }
})

const api = new ApiClient()

export const searchRestaurant = (query: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const response = await api.getRestaurantsBySearch(query)
    console.log('found', response)
    dispatch(restaurantSlice.actions.listSuccess(response.restaurants as Restaurant[]))
  } catch (err) {
    console.log('not found', err)
    dispatch(restaurantSlice.actions.listFail([]))
  }
}

export const {
  loadList,
  listSuccess,
  listFail,
  loadDetail,
  detailSuccess,
  detailFail
} = restaurantSlice.actions

export default restaurantSlice.reducer
