import {Product} from './Product'

type Dish = {
    dish_id: string
    name: string
    price: string
}

export type Menu = {
    daily_menu: {
        name: string
        dishes: Array<Dish>
    }
}