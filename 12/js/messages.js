import {onDocumentEscapeKeydown} from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);
const successButton = successPopup.querySelector('.success__button');
const successInner = successPopup.querySelector('.success__inner');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorTemplate.cloneNode(true);
const errorButton = errorPopup.querySelector('.error__button');
const errorInner = errorPopup.querySelector('.error__inner');


// Ошибка при получении данных

const showErrorMeassge = (error) => {
  const messageTemp = errorTemplate.cloneNode(true);
  messageTemp.querySelector('.error__title').textContent = error;
  document.addEventListener('keydown', onErrorKeydown);
  messageTemp.querySelector('.error__button').classList.add('hidden');
  document.body.append(messageTemp);
  setTimeout(() => {
    messageTemp.remove();
  }, 5000);
};

// Закрытие инфо попапа

const closeSuccessPopup = () => {
  successPopup.remove();
  document.removeEventListener('keydown', onSuccessKeydown);
  document.removeEventListener('click', onSuccessClick);
};

// Закрытие инфо попапа по нажатию ESC

function onSuccessKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    closeSuccessPopup();
  }
}

// Закрытие инфо попапа кликом рядом

function onSuccessClick (evt) {
  if (evt.target !== successInner) {
    closeSuccessPopup();
  }
}

// Показ инфо попапа

const showSuccessPopup = () => {
  document.body.append(successPopup);

  successButton.addEventListener('click', () => {
    closeSuccessPopup();
  });

  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessClick);
};


// Закрытие попапа ошибки

const closeErrorPopup = () => {
  errorPopup.remove();
  document.removeEventListener('keydown', onErrorKeydown);
  document.removeEventListener('click', onErrorClick);
  document.addEventListener('keydown', onDocumentEscapeKeydown);
};


// Закрытие попапа ошибки по нажатию ESC

function onErrorKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    closeErrorPopup();
  }
}


// Закрытие попапа ошибки кликом по любой области

function onErrorClick (evt) {
  if (evt.target !== errorInner) {
    closeErrorPopup();
  }
}


// Показ попапа ошибки

const showErrorPopup = () => {
  document.body.append(errorPopup);

  errorButton.addEventListener('click', () => {
    closeErrorPopup();
  });

  document.addEventListener('keydown', onErrorKeydown);
  document.addEventListener('click', onErrorClick);
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

export {showSuccessPopup , showErrorPopup, showErrorMeassge};
