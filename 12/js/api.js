const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ERROR_GET = 'Не удаётся загрузить данные. Проверьте подключение к сети';
const ERROR_SEND = 'Не удаётся отправить форму. Проверьте подключение к сети';

const load = (route, errorText, method, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ERROR_GET, 'GET');

const sendData = (body) => load(Route.SEND_DATA, ERROR_SEND, 'POST', body);

export {getData, sendData};
