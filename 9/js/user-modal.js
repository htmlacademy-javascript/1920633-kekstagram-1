import {isEscapeKey} from './util.js';
import {openBigPicture, clearComments} from './open-big-picture.js';
import {usersPosts} from './thumbnails.js';

const thumbnails = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const modalCloseElement = document.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = (thumbnail, picture) => {
  thumbnail.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialComments.replaceChildren();
    openBigPicture(picture);
    body.classList.add('modal-open');

    document.addEventListener('keydown', onDocumentKeydown);
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  openModal(thumbnails[i], usersPosts[i]);
}

function closeModal () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  clearComments();

  document.removeEventListener('keydown', onDocumentKeydown);
}

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
