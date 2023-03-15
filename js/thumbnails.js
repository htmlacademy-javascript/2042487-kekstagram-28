import {createPhotoWithComments} from './data.js';

//Находим содержимое шаблона
const thumbnailsTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Присваеваем результат генерации фото переменной
const pictureItems = createPhotoWithComments();

const renderThumbnails = () => {
  const newFragment = document.createDocumentFragment();

  pictureItems.forEach(({url, comments, likes}) => {
    const newPicture = thumbnailsTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    newPicture.querySelector('.picture__likes').textContent = likes;

    newFragment.append(newPicture);
  });

  //Находим место добавления миниатюр
  const container = document.querySelector('.pictures');
  return container.append(newFragment);

};

export {renderThumbnails};
