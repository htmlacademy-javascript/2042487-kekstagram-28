// Находим место добавления миниатюр

const container = document.querySelector('.pictures');


// Показываем загаловок страницы

const picturesTitle = container.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');


// Находим содержимое шаблона

const thumbnailsTemplate = document.querySelector('#picture').content.querySelector('.picture');


//Присваеваем результат генерации фото переменной

const renderThumbnails = (pictureItems) => {
  const newFragment = document.createDocumentFragment();

  pictureItems.forEach(({url, comments, description, likes, id}) => {
    const thumbnail = thumbnailsTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.dataset.thumbnailId = id;

    newFragment.append(thumbnail);
  });
  return container.append(newFragment);
};

export {renderThumbnails};
