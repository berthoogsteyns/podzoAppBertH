import {User} from './User'

export type Review = {
  id: number
  user: User
  rating: number
  review_text: string
}
