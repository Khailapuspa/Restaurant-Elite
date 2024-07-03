import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async menuRestaurant() {
    const response = await fetch(API_ENDPOINT.MENU_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants; // Correctly reference 'restaurants' key
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestoDbSource;
