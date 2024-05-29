import {createPostList} from './data.js';

const templatePictures = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const usersPosts = createPostList();

const photoFragment = document.createDocumentFragment();

usersPosts.forEach(({url, likes, comments}) => {
  const postElement = templatePictures.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments.length;
  photoFragment.appendChild(postElement);
});

picturesList.appendChild(photoFragment);

export {usersPosts};
