import './util.js';
import './data.js';
import {renderPostsList} from './thumbnails.js';
import {closeModal} from './user-modal.js';
import './user-form.js';
import {setUserFormSubmit} from './validate-photo-editor.js';
import './scale-image.js';
import './filters.js';
import {getData} from './api.js';
import { showLoadingError } from './util.js';

getData()
  .then((photos) => {
    renderPostsList(photos);
  })
  .catch(() => {
    showLoadingError();
  });

setUserFormSubmit(closeModal);
