import { Menu } from './Menu'
import { Rating } from './Rating'

export type Restaurant = {
  id: number
  name: string
  phone: string
  website: string
  location: string
  online_delivery: boolean
  table_booking: boolean
  cuisine: string
  currency: string
  price_range: number
  ratings: Array<Rating>
  menu: Menu
}
