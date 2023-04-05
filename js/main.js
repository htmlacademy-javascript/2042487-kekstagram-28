import {getData} from './api.js';
import {renderGallery} from './gallery.js';
import {showErrorMeassge} from './messages.js';
import {setUserFormSubmit} from './form.js';
import {setDebouncedSort, showSortButtons} from './filters.js';
import './hidden-favicon.js';
import './upload.js';
import './form.js';

getData()
  .then((usersPictures) => {
    renderGallery(usersPictures);
    showSortButtons();
    setDebouncedSort(usersPictures);
  })
  .catch((err) => {
    showErrorMeassge(err.message);
  });

setUserFormSubmit();
