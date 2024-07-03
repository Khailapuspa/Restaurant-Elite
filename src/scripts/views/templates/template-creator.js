import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" data-src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="${resto.name || resto.title || '-'}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating || resto.vote_average || '-'}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name || resto.title || '-'}</a></h3>
      <p>${resto.description || resto.overview || '-'}</p>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_URL}images/large/${resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${resto.address}, ${resto.city}</p>
    <h4>Categories</h4>
    <p>${resto.categories.map((category) => category.name).join(', ')}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto__menu">
    <h3>Menu</h3>
    <h4>Foods</h4>
    <ul>
      ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Drinks</h4>
    <ul>
      ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
  <div class="resto__reviews">
    <h3>Customer Reviews</h3>
    ${resto.customerReviews
    .map(
      (review) => `
      <div class="review">
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <p><small>${review.date}</small></p>
      </div>
    `,
    )
    .join('')}
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="gold"/>
    </svg>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
