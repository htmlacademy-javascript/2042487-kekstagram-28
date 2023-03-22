import {getRandomInteger, GetRandomArrayElement, createRandomIdFromRangeGenerator} from './utils.js';

const PHOTO_NUMBER = 25;
const PHOTO_ID_START = 1;
const PHOTO_ID_END = 25;
const COMMENT_ID_START = 1;
const COMMENT_ID_END = 100;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_COUNT = 6;
const COMMENT_NUMBER_MIN = 0;
const COMMENT_NUMBER_MAX = 3;

//массив описаний фото
const DESCRIPTION_PHOTOS = [
  'Взяли пса из приюта',
  'Из поколения в поколение',
  'Супергерой',
  'Добро',
  'Отдай мне шоколад, и никто не пострадает,',
  'Это моё довольно голодное лицо.',
  'Не мечтай об этом. Тренируйтесь для этого.',
  'Счастье никогда не выходит из моды.',
  'Улыбайся больше, меньше сожалей.',
  'Узкая талия, красивое лицо.',
  'Врасплох, но в точку!',
  'Смотрюсь живым.',
];

//массив комментариев
const COMMENT_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'When you took the photo?',
  'What is in the photo?!',
  'What is happening!!??',
  'Why you took the photo?',
  'Why you decided to show the picture to your friend?!',
];

//массив имён комментаторов
const COMMENTATOR_NAMES = [
  'Диана',
  'Инга',
  'Белла',
  'Мелисса',
  'Оливия',
  'Кира',
  'Денис',
  'Егор',
  'Игорь',
  'Лев',
  'Леонид',
  'Павел',
  'Петр',
  'Роман',
];

//Генератор для id комментария и фото
const generatePhotoId = createRandomIdFromRangeGenerator(PHOTO_ID_START, PHOTO_ID_END);
const generateCommentId = createRandomIdFromRangeGenerator(COMMENT_ID_START, COMMENT_ID_END);

let pictureItems;
//Создаёт комментарий
const createCommentForPhoto = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: GetRandomArrayElement(COMMENT_TEXTS),
  name: GetRandomArrayElement(COMMENTATOR_NAMES),
});

//Получаем случайное число комментариев
const getRandomNumberComments = () =>
  Array.from({length: getRandomInteger(COMMENT_NUMBER_MIN, COMMENT_NUMBER_MAX)}, createCommentForPhoto);

//Создаёт фото с комментариями
const createPhotoPost = function () {
  const photoId = generatePhotoId();

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: GetRandomArrayElement(DESCRIPTION_PHOTOS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: getRandomNumberComments(),
  };
};

//Создаёт заданное количество фото с комментариями, если не создавали ранее.
function getPhotoWithComments() {
  return pictureItems || (pictureItems = Array.from({length: PHOTO_NUMBER}, createPhotoPost));
}

export {getPhotoWithComments};
