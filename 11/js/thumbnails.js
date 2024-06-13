import {openModal} from './user-modal.js';

const templatePictures = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderPostsList = (usersPosts) => {
  const photoFragment = document.createDocumentFragment();

  usersPosts.forEach(({url, likes, comments}, index) => {
    const postElement = templatePictures.cloneNode(true);
    postElement.querySelector('.picture__img').src = url;
    postElement.querySelector('.picture__likes').textContent = likes;
    postElement.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.appendChild(postElement);
    openModal(postElement, usersPosts[index]);
  });

  picturesList.appendChild(photoFragment);
};

export {renderPostsList};
