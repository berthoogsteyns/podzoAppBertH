import { Store } from '@material-ui/icons'
import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import restaurantReducer, {RestaurantState}  from '../slice/restaurant'

const store =  configureStore({
  reducer: restaurantReducer
})

export type AppDispatch = typeof Store
export type AppThunk = ThunkAction<void, RestaurantState, null, Action<string>>

export default store