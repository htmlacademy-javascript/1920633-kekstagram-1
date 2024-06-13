import {resetScale} from './scale-image.js';
import {resetFilter} from './filters.js';
import {clearInputs} from './user-form.js';

const templateSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');
const templateError = document.querySelector('#error')
  .content
  .querySelector('.error');

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getUniqueId = (min, max) => {
  const idList = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (idList.length >= (max - min + 1)) {
      return null;
    }

    while (idList.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    idList.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const clearForm = () => {
  resetScale();
  resetFilter();
  clearInputs();
};

const showLoadingError = () => {
  const alert = templateError.cloneNode(true);
  const buttonAlert = alert.querySelector('[type=button]');

  alert.querySelector('h2').textContent = 'Ошибка сервера.';
  buttonAlert.textContent = 'Закрыть';

  const closeAlert = () => {
    alert.remove();
  };

  const onButtonClick = () => {
    closeAlert();
    buttonAlert.removeEventListener('click', onButtonClick);
  };

  buttonAlert.addEventListener('click', onButtonClick);

  document.body.appendChild(alert);
};

const showAlert = (template) => {
  const alert = template.cloneNode(true);
  const buttonAlert = alert.querySelector('[type=button]');
  const buttonSuccess = buttonAlert.classList.contains('success__button');

  const closeAlert = () => {
    alert.remove();
  };

  const onButtonClick = () => {
    if (buttonSuccess) {
      clearForm();
    }

    closeAlert();
    removeEventListeners();
  };

  const onDocumentClick = (evt) => {
    if (evt.target === alert) {
      closeAlert();
      removeEventListeners();
    }

    if (buttonSuccess) {
      clearForm();
    }
  };

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeAlert();
      removeEventListeners();
    }

    if (buttonSuccess) {
      clearForm();
    }
  };

  function removeEventListeners () {
    buttonAlert.removeEventListener('click', onButtonClick);
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  buttonAlert.addEventListener('click', onButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);

  document.body.appendChild(alert);
};

const showSuccess = () => {
  showAlert(templateSuccess);
};

const showError = () => {
  showAlert(templateError);
};

export {getRandomInteger, getUniqueId, getRandomArrayElement, isEscapeKey, clearForm, showSuccess, showError, showLoadingError};
