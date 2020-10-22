export type Dish = {
  dish_id: number
  name: string
  price: number
}

export type DailyMenuCategorie = {
    daily_menu_id: number
    start_date: string
    end_date: string
    name: string
    dishes: Array<Dish>
}

export type Menu = {
  daily_menu: Array<DailyMenuCategorie>
}
