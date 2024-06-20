import {showDefaultPosts, showRandomPosts, showDiscussedPosts} from './thumbnails.js';

const imgFilters = document.querySelector('.img-filters');
const formFilters = document.querySelector('.img-filters__form');
const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

const setEventListener = (posts) => {
  formFilters.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      if (evt.target === buttonDefault) {
        showDefaultPosts(posts);
      } else if (evt.target === buttonRandom) {
        showRandomPosts(posts);
      } else if (evt.target === buttonDiscussed) {
        showDiscussedPosts(posts);
      }
    }

    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  });
};

const showFilters = (posts) => {
  imgFilters.classList.remove('img-filters--inactive');
  setEventListener(posts);
};

export {showFilters};
