//генератор случайных чисел из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Случайный элемент массива
const GetRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

//генератор уникальных id
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export {GetRandomArrayElement, getRandomInteger, createIdGenerator};
