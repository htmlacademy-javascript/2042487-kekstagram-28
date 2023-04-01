import {getData} from './api.js';
import {renderGallery} from './gallery.js';
import {showErrorMeassge} from './messages.js';
import {setUserFormSubmit} from './form.js';
import './hidden-favicon.js';
import './form.js';

getData()
  .then((usersPictures) => {
    renderGallery(usersPictures);
  })
  .catch((err) => {
    showErrorMeassge(err.message);
  });

setUserFormSubmit();
