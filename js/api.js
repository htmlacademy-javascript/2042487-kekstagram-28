const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const SEND_URL = 'https://28.javascript.pages.academy/kekstagram/';

const ERROR_GET = 'Не удаётся загрузить данные. Проверьте подключение к сети';
const ERROR_SEND = 'Не удаётся отправить форму. Проверьте подключение к сети';

const load = (route, errorText, method, body = null) =>
  fetch(route, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(GET_URL, ERROR_GET, 'GET');

const sendData = (body) => load(SEND_URL, ERROR_SEND, 'POST', body);

export {getData, sendData};
