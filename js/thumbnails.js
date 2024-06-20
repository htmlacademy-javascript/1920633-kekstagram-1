import {openModal} from './user-modal.js';
import { getUniqueId } from './util.js';

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

const clearPosts = () => {
  const allPosts = document.querySelectorAll('.picture');

  return allPosts.forEach((element) => {
    element.remove();
  });
};

const sortPosts = (postA, postB) => {
  const postOne = postA.comments.length;
  const postTwo = postB.comments.length;

  return postTwo - postOne;
};

const showDefaultPosts = (posts) => {
  clearPosts();
  renderPostsList(posts);
};

const showRandomPosts = (posts) => {
  clearPosts();

  const randomArray = [];
  const randomId = getUniqueId(0, posts.length - 1);

  for (let i = 0; i < 10; i++) {
    const currentRandomId = randomId();
    randomArray.push(posts[currentRandomId]);
  }

  renderPostsList(randomArray);
};

const showDiscussedPosts = (posts) => {
  clearPosts();
  const discussedArray = posts.slice().sort(sortPosts);

  renderPostsList(discussedArray);
};

export {renderPostsList, sortPosts, showDefaultPosts, showRandomPosts, showDiscussedPosts};
