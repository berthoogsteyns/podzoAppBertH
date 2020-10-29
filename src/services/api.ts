import axios from 'axios'
import { Restaurant } from '../models/Restaurant'
import { Review } from '../models/Review'
import { User } from '../models/User'
import { Location } from '../models/Location'
import { RepeatOneSharp } from '@material-ui/icons'
import { Menu } from '../models/Menu'

export const parseToLocation = (json: any): Location => {
  return json as Location
}

export const parseToMenu = (json: any): Menu => {
  return json as Menu
}

export const parseToRestaurant = (toParse: any): Restaurant => {

  let restaurant: Restaurant = {
    id: toParse.id,
    name: toParse.name,
    url: toParse.url,
    location: parseToLocation(toParse.location),
    currency: toParse.currency,
    online_delivery: toParse.has_online_delivery,
    table_booking: toParse.has_table_booking,
    cuisines: toParse.cuisines,
    price_range: toParse.price_range,
    phone_numbers: toParse.phone_numbers,
    all_reviews: toParse.all_reviews,
    featured_image: toParse.featured_image
  }
  return restaurant
}

export const parseToRestaurants = (json: any): Restaurant[] => {
  const restaurants = json.restaurants.map((r: any) => parseToRestaurant(r.restaurant))

  return restaurants
}

export const parseToUser = (json): User => {
  return json as User
}

export const parseToReview = (json): Review[] => {
  const reviews = json.user_reviews.map((r:any) => {
    let review: Review = {
      id: r.review.id,
      rating: r.review.rating,
      review_text: r.review.rating_text,
      user: parseToUser(r.review.user)
    }
    return review
  })
  return reviews
}

const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = process.env.REACT_APP_API_BASEURL

export default class ApiClient {
  getRestaurant = async (id: string) => {
    return axios({
      url: baseUrl + `/restaurant?res_id=${id}`,
      method: 'get',
      headers: {
        'user-key': apiKey
      }
    })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.error(err)
        throw new Error(err)
      })
  }

  getRestaurantsBySearch = async (search: string, start:number) => {
    return axios({
      url: baseUrl + `/search?q=${search}&start=${start}`,
      method: 'get',
      headers: {
        'user-key': apiKey
      }
    })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.error(err)
        throw new Error(err)
      })
  }

  getRestaurantReviews = async (id: number) => {
    return axios({
      url: baseUrl + `/reviews?res_id=${id}`,
      method: 'get',
      headers: {
        'user-key': apiKey
      }
    })
      .then((response) => response.data)
      .catch((err) => {
        console.error(err)
        throw new Error(err)
      })
  }

  getRestaurantMenu = async (id: number) => {
    return axios({
      url: baseUrl + `/dailymenu?res_id=${id}`,
      method: 'get',
      headers: {
        'user-key': apiKey
      }
    })
      .then((res) => res.data)
      .catch((err) => {
        console.error('get menu fail', err)
      })
  }
}
