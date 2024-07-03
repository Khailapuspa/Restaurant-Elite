import filter from 'lodash.filter';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <input id="query" type="text" placeholder="Search restaurant...">
        <div id="restos" class="restos"></div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.menuRestaurant();
    this._renderRestos(restos);

    const searchInput = document.querySelector('#query');
    searchInput.addEventListener('input', () => {
      this._filterAndRenderRestos(restos, searchInput.value);
    });
  },

  _renderRestos(restos) {
    const restoContainer = document.querySelector('#restos');
    restoContainer.innerHTML = '';
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },

  _filterAndRenderRestos(restos, query) {
    const filteredRestos = filter(restos, (resto) => resto.name.toLowerCase()
      .includes(query.toLowerCase())); // Pecah baris panjang
    this._renderRestos(filteredRestos);
  },
};

export default Home;
