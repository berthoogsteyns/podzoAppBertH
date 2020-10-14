import { Restaurant } from '../../models/Restaurant'
import { produce } from 'immer'
import { ActionType } from '../actions/restaurantActions'
import * as restaurantActions from '../actions/restaurantActions'

type RestaurantState = {
  list: Restaurant[]
  isLoadingList: boolean
  detail: Restaurant
  isLoadingDetail: boolean,
  searchQuerry: string
}

const initialState: RestaurantState = {
  list: [],
  isLoadingList: true,
  detail: <Restaurant>{},
  isLoadingDetail: true,
  searchQuerry: ''
}

export const rootReducer = (state:RestaurantState, action:ActionType) => {
    return produce(state, draft => {
        switch(action.type) {
          case restaurantActions.LOAD_RESTAURANT_LIST: {
            draft.isLoadingList = true
            break
          }
          case restaurantActions.LOAD_RESTAURANT_LIST_SUCCESS: {
            draft.list = action.payload.data
            draft.isLoadingList = false
            break
          }
          case restaurantActions.LOAD_RESTAURANT_LIST_FAIL: {
            draft.isLoadingList = false
            draft.list = action.payload
            break
          }
          case restaurantActions.LOAD_RESTAURANT_DETAIL: {
            draft.isLoadingDetail = true
            break
          }
          case restaurantActions.LOAD_RESTAURANT_DETAIL_SUCCESS: {
            draft.isLoadingDetail = false
            draft.detail = action.payload.data
            break
          }
          case restaurantActions.LOAD_RESTAURANT_DETAIL_FAIL: {
            draft.isLoadingDetail = false
            draft.detail = action.payload
            break
          }
        }
    })
}

// Action Creators

export const getRestuarant
