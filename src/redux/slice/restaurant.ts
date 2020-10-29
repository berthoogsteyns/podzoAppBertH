import { Restaurant } from '../../models/Restaurant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store/store'
import ApiClient, { parseToMenu, parseToRestaurants, parseToReview } from '../../services/api'

export type RestaurantState = {
  list: Restaurant[]
  isLoadingList: boolean
  detail: Restaurant
  isLoadingDetail: boolean
  results_found: number
}

const initialState: RestaurantState = {
  list: [],
  isLoadingList: true,
  detail: <Restaurant>{},
  isLoadingDetail: true,
  results_found: 0
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
      state.results_found = action.payload
    }
  }
})

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
