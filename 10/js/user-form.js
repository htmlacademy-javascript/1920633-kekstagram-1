import {isEscapeKey} from './util.js';

const body = document.body;
const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeOverlayButton = document.getElementById('upload-cancel');

const isInputFocused = () => {
  const activeElement = document.activeElement;
  return activeElement.classList.contains('text__hashtags') || activeElement.classList.contains('text__description');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isInputFocused()) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

uploadInput.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
});

function closeUploadOverlay () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeOverlayButton.addEventListener('click', () => {
  closeUploadOverlay();
});

