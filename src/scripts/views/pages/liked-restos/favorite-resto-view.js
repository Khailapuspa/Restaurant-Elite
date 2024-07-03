import filter from 'lodash.filter';
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    this.template = `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <input id="query" type="text" placeholder="Cari restoran favorit...">
        <div id="restos" class="restos"></div>
      </div>
    `;
    return this.template;
  }

  runWhenUserIsSearching(callback) {
    this.callback = callback;
    document.getElementById('query').addEventListener('input', (event) => {
      this.callback(event.target.value);
    });
  }

  showRestos(restos) {
    this._allRestos = restos;
    this.showFavoriteRestos(restos);
  }

  showFavoriteRestos(restos) {
    let html;
    if (restos.length) {
      html = restos.reduce(
        (carry, resto) => carry.concat(createRestoItemTemplate(resto)),
        '',
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos')
      .dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    this.emptyTemplate = `
      <div class="resto-item__not__found">
        Tidak ada resto untuk ditampilkan
      </div>
    `;
    return this.emptyTemplate;
  }

  _filterAndRenderRestos(query) {
    const filteredRestos = filter(
      this._allRestos,
      (resto) => resto.name.toLowerCase().includes(query.toLowerCase()),
    );
    this.showFavoriteRestos(filteredRestos);
  }
}

export default FavoriteRestoView;
