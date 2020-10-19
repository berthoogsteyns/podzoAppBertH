import axios from 'axios'
import { Restaurant } from '../models/Restaurant'
import { Review } from '../models/Review'
import { User } from '../models/User'
import { Location } from '../models/Location'
import { RepeatOneSharp } from '@material-ui/icons'
import { Menu } from '../models/Menu'

export const parseToLocation = (json:any): Location => {
  return json as Location
}

export const parseToMenu = (json:any): Menu => {
  return json as Menu
}

export const parseToRestaurant = (json: any): Restaurant[] => {
  const restaurants = json.restaurants.map((r) => {
    let f: Restaurant = {
      id: r.restaurant.id,
      name: r.restaurant.name,
      url: r.restaurant.url,
      location: parseToLocation(r.restaurant.location),
      currency: r.restaurant.currency,
      online_delivery: r.restaurant.has_online_delivery,
      table_booking: r.restaurant.has_table_booking,
      cuisines: r.restaurant.cuisines,
      price_range: r.restaurant.price_range,
      phone_numbers: r.restaurant.phone_numbers,
      all_reviews: r.restaurant.all_reviews,
      featured_image: r.restaurant.featured_image
    }
    return f
  })

  return restaurants
}

export const parseToUser = (json): User => {
  return json as User
}

export const parseToReview = (json): Review[] => {
  console.log('parse review', json.user_reviews)
  const reviews = json.user_reviews.map(r => {
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

export default class ApiClient {
  private static baseUrl = 'https://developers.zomato.com/api/v2.1'
  private static apiKey = '47d6af7d73d02359d70879689f24b247'

  getRestaurantsBySearch = async (search: string) => {
    return axios({
      url: ApiClient.baseUrl + `/search?q=${search}&count=20`,
      method: 'get',
      headers: {
        'user-key': ApiClient.apiKey
      }
    })
      .then((response) => {
        console.log('response', response)
        return response.data
      })
      .catch((err) => {
        console.error(err)
        throw new Error(err)
      })
  }

  getRestaurantReviews = async (id: number) => {
    return axios({
      url: ApiClient.baseUrl + `/reviews?res_id=${id}`,
      method: 'get',
      headers: {
        'user-key': ApiClient.apiKey
      }
    })
      .then((response) => response.data)
      .catch((err) => {
        console.error(err)
        throw new Error(err)
      })
  }

  getRestaurantMenu = async (id:number) => {
    return axios({
      url: ApiClient.baseUrl + `/dailymenu?res_id=${id}`,
      method: 'get',
      headers: {
        'user-key': ApiClient.apiKey
      }
    })
    .then(res => res.data)
    .catch(err => {
      console.error('get menu fail', err);
    })
  }
}
