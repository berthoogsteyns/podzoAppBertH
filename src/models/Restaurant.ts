import { Menu } from './Menu'
import { Review } from './Review'

export type Restaurant = {
  id: string
  name: string
  url: string
  phone: string
  featured_image: string
  website: string
  location: Location
  online_delivery: boolean
  table_booking: boolean
  cuisines: string
  currency: string
  price_range: number
  all_reviews: Array<Review>
  menu: Menu
}
