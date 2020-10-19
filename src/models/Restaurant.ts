import { Menu } from './Menu'
import { Review } from './Review'
import { Location } from './Location'

export type Restaurant = {
  id: number
  name: string
  url: string
  phone_numbers: string
  featured_image: string
  location: Location
  online_delivery: boolean
  table_booking: boolean
  cuisines: string
  currency: string
  price_range: number
  all_reviews: Array<Review>
  menu?: Menu
}
