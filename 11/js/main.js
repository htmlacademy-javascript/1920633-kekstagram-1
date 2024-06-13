/* eslint-disable no-console*/
import './util.js';
import {createPostList} from './data.js';
import {renderPostsList} from './thumbnails.js';
import {closeModal} from './user-modal.js';
import './user-form.js';
import {setUserFormSubmit} from './validate-photo-editor.js';
import './scale-image.js';
import './filters.js';
import {getData} from './api.js';

console.log(createPostList());

getData()
  .then((photos) => {
    renderPostsList(photos);
  });

setUserFormSubmit(closeModal);
