import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Restaurant Detail</h2>
            <div id="resto" class="resto"></div>
            <div id="likeButtonContainer"></div>
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto'); // Use the correct id
    restoContainer.innerHTML = createRestoDetailTemplate(restos.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: restos.restaurant.id,
        name: restos.restaurant.name,
        description: restos.restaurant.description,
        pictureId: restos.restaurant.pictureId,
        rating: restos.restaurant.rating,
      },
    });
  },
};

export default Detail;
