const body = document.body;
const form = document.querySelector('.img-upload__form');
const imageOverlay = form.querySelector('.img-upload__overlay');
const uploadFileInput = form.querySelector('#upload-file');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');
const uploadCancel = imageOverlay.querySelector('#upload-cancel');
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;

const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// Открытие окна редактирования

const openModal = () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

// Закрытие окна редактирования

const closeModal = () => {
  form.reset();
  pristine.reset();
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadCancel.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onDocumentKeydown);
};

// Есть фокус на поле ввода

const isFocusOnInput = () => document.activeElement === hashtagInput || document.activeElement === commentInput;

// Закрытие окна нажатием клавиши ESC

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape' && !isFocusOnInput()) {
    evt.preventDefault();
    closeModal();
  }
}

// Форматирует строку

const stringToArray = (string) => {
  const tags = string.trim().split(' ').filter((tag) => tag.trim().length);
  return tags;
};

// Функция, проверяющая хэш-тег

const isValidHashtag = (string) => {
  const pattern = /^#[a-zа-яё0-9]{0,}$/i;
  return pattern.test(string);
};

// Проверка хэш-тегов по шаблону

const isValidPattern = (string) => {
  const tags = stringToArray(string);
  return tags.every(isValidHashtag);
};

// Проверка хэш-тегов по длинне

const isValidLenghth = (string) => {
  const tags = stringToArray(string);
  return tags.every(((tag) => tag.length <= MAX_HASHTAG_LENGTH));
};
// Проверка строки на повторяющиеся хэш-теги

const isUniqueTags = (string) => {
  const tags = stringToArray(string);
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// Проверка количества хэш-тегов

const isNormalCount = (string) => {
  const tags = stringToArray(string);
  return tags.length <= MAX_HASHTAG_COUNT;
};

//Создание валидаторов

pristine.addValidator(hashtagInput, isValidPattern, 'После # должна быть буква или цифра, не может содержать пробелы и спецсимволы!');
pristine.addValidator(hashtagInput, isNormalCount, 'Нельзя указать больше пяти хэш-тегов!');
pristine.addValidator(hashtagInput, isUniqueTags, 'Хэш-теги повторяются!');
pristine.addValidator(hashtagInput, isValidLenghth, 'Слишком длинный тег!');

// Валидация формы

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
};

uploadFileInput.addEventListener('change', openModal);
uploadCancel.addEventListener('click', closeModal);
form.addEventListener('submit', onFormSubmit);
