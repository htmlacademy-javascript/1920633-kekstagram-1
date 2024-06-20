import {isEscapeKey} from './util.js';
import {clearForm} from './util.js';

const body = document.body;
const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeOverlayButton = document.getElementById('upload-cancel');
const form = document.querySelector('.img-upload__form');

const isInputFocused = () => {
  const activeElement = document.activeElement;
  return activeElement.classList.contains('text__hashtags') || activeElement.classList.contains('text__description');
};

const onDocumentKeydown = (evt) => {
  const errorAlert = document.querySelector('.error');

  if (isEscapeKey(evt) && !isInputFocused() && !errorAlert) {
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
  clearForm();

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeOverlayButton.addEventListener('click', () => {
  closeUploadOverlay();
});

const resetForm = () => {
  form.reset();
};

export {closeUploadOverlay, resetForm};
