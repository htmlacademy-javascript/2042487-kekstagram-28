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


// Генерация комментариев для большого фото

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = socialComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.append(commentElement);
  });
  commentsList.append(commentsFragment);
};

// Генерация большого фото

const renderFullSizePicture = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsList.innerHTML = '';
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentCount.textContent = picture.comments.length;
  document.addEventListener('keydown', onDocumentKeydown);
  renderComments(picture.comments);
};

// Функция закрытия большого фото

const closeFullSizePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

// Закрытие фото кликом по кнопке

bigPictureCancel.addEventListener('click', () => {
  closeFullSizePicture();
});

// Закрытие с помощью  Esc
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizePicture();
  }
}

export {renderFullSizePicture};
