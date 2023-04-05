const START_COMMENTS_NUMBER = 5;
let actualCommentsCount = START_COMMENTS_NUMBER;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.comments-count');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const socialComment = commentsList.querySelector('.social__comment');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;


// Создание комментария для модального окна

const createComment = (comment) => {
  const commentElement = socialComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};


// Отрисовка комментариев модального окна

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  const moreComments = () => {
    actualCommentsCount += START_COMMENTS_NUMBER;
    renderComments(comments);
  };
  comments.slice(0, actualCommentsCount).forEach((comment) => {
    commentsFragment.append(createComment(comment));
  });
  commentsList.innerHTML = '';
  commentsList.append(commentsFragment);

  if (actualCommentsCount >= comments.length) {
    actualCommentsCount = comments.length;
    commentsLoader.classList.add('hidden');

  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.onclick = moreComments;
  }
  socialCommentCount.textContent = `${actualCommentsCount} из ${comments.length} комментариев`;
};


// Отрисовка большого фото

const renderFullSizePicture = (picture) => {
  actualCommentsCount = START_COMMENTS_NUMBER;
  commentsList.innerHTML = '';
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentCount.textContent = picture.comments.length;
};


// Открытие модального окна

const openModal = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsList.innerHTML = '';

  document.addEventListener('keydown', onDocumentKeydown);

  renderFullSizePicture (picture);
  renderComments(picture.comments);
};


// Функция закрытия окна большого изображения

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.onclick = null;
};


// Закрытие окна кликом по кнопке

bigPictureCancel.addEventListener('click', () => {
  closeModal();
});


// Закрытие окна с помощью  Esc

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

export {openModal};
