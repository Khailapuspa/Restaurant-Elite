import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoView from './liked-restos/favorite-resto-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const showPresenter = new FavoriteRestoShowPresenter({
      view,
      favoriteRestos: FavoriteRestoIdb,
    });

    const searchPresenter = new FavoriteRestoSearchPresenter({
      view,
      favoriteRestos: FavoriteRestoIdb,
    });

    // Gunakan variabel untuk log atau debugging
    console.log(showPresenter, searchPresenter);
  },
};

export default Favorite;
