import axios from 'axios'

export default class ApiClient {
  private static baseUrl = 'https://developers.zomato.com/api/v2.1/'
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
      .catch(err => {
        console.error(err)
        throw new Error(err);
        
      })
  }
}
