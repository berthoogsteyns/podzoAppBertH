type Dish = {
  dish_id: string
  name: string
  price: string
}

type DailyMenuCategorie = {
    daily_menu_id: number
    start_date: string
    end_date: string
    name: string
    dishes: Array<Dish>
}

export type Menu = {
  daily_menu: Array<DailyMenuCategorie>
}
