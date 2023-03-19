import {renderFullSizePicture} from './full-size-picture.js';
import {renderThumbnails} from './thumbnails.js';


const container = document.querySelector('.pictures');

const renderGallary = (pictures) => {
  renderThumbnails();
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    console.log(thumbnail);
    console.log(pictures);
    if(!thumbnail) {
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    console.log(+thumbnail.dataset.thumbnailId);
    renderFullSizePicture(picture);
  });
};


export {renderGallary};
