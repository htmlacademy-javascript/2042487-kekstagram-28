//массив описаний фото
const DESCRIPTION_PHOTO = [
  'Взяли пса из приюта',
  'Из поколения в поколение',
  'Супергерой',
  'Добро',
];

//массив комментариев
const COMMENT_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//массив имён комментаторов
const NAME_OF_COMMENTATOR = [
  'Диана',
  'Инга',
  'Белла',
  'Мелисса',
  'Оливия',
  'Кира',
];

const PHOTO_NUMBER = 25;

//генератор случайных чисел из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//генератор уникальных id
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const createCommentsPhoto = function () {
  const commentIndex = generateCommentId();
  const randomAvatarIndex = getRandomInteger(1, 6);
  const randomCommentIndex = getRandomInteger(0, COMMENT_TEXT.length - 1);
  const randomNamesIndex = getRandomInteger(0, NAME_OF_COMMENTATOR.length - 1);

  return {
    id: commentIndex,
    avatar: `img/avatar-${randomAvatarIndex}.svg`,
    message: COMMENT_TEXT[randomCommentIndex],
    name: NAME_OF_COMMENTATOR[randomNamesIndex],
  };
};

const createDescriptionPhoto = function () {
  const randomPhotoIndex = generatePhotoId();
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION_PHOTO.length - 1);
  const ramdonLikesNumber = getRandomInteger(15, 200);
  const randomComment = createCommentsPhoto();

  return {
    id: randomPhotoIndex,
    url: `photos/${randomPhotoIndex}.jpg`,
    description: DESCRIPTION_PHOTO[randomDescriptionIndex],
    likes: ramdonLikesNumber,
    comments: randomComment,
  };
};

const createDescriptionsforAll = Array.from({length: PHOTO_NUMBER}, createDescriptionPhoto);
//eslint-disable-next-line
console.log(createDescriptionsforAll);

