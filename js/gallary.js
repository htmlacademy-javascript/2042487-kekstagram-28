import {renderFullSizePicture} from './full-size-picture.js';
import {renderThumbnails} from './thumbnails.js';

const container = document.querySelector('.pictures');

const renderGallary = (pictures) => {
  renderThumbnails();
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thrumbnail-id]');
    if(!thumbnail) {
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thrumbnailId
    );
    console.log(picture);
    renderFullSizePicture(picture);
  });
};


export {renderGallary};
