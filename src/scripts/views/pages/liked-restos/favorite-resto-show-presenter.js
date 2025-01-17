class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestos }) {
    this._view = view;
    this._favoriteRestos = favoriteRestos;

    this._showFavoriteRestos();
    // const restos = this._favoriteRestos.getAllRestos();
    // this._displayRestos(restos);
  }

  async _showFavoriteRestos() {
    const restos = await this._favoriteRestos.getAllRestos();
    this._displayRestos(restos);
  }

  _displayRestos(restos) {
    this._view.showFavoriteRestos(restos);
  }
}

export default FavoriteRestoShowPresenter;
