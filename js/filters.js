import {renderThumbnails} from './thumbnails.js';
import {debounce, sortRandom} from './utils.js';

const TIMEOUT = 500;
const RANDOM_PICTURES_COUNT = 10;

const filterContainer = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultSortButton = document.querySelector('#filter-default');
const randomSortButton = document.querySelector('#filter-random');
const discussedSortButton = document.querySelector('#filter-discussed');


const sortByComments = (a, b) => b.comments.length - a.comments.length;


// Сортировки фото

const sortPictures = (pictures, sortButton) => {
  if (sortButton === defaultSortButton) {
    return pictures;
  } else if (sortButton === randomSortButton) {
    return pictures.slice().sort(sortRandom).slice(0, RANDOM_PICTURES_COUNT);
  } else if (sortButton === discussedSortButton) {
    return pictures.slice().sort(sortByComments);
  }
};

const removePictures = (pictures) => pictures.forEach((thumbnail) => thumbnail.remove());

const handleSortButtonClick = (evt, pictures) => {
  defaultSortButton.classList.remove('img-filters__button--active');
  randomSortButton.classList.remove('img-filters__button--active');
  discussedSortButton.classList.remove('img-filters__button--active');
  const sortButton = evt.target;
  sortButton.classList.add('img-filters__button--active');
  const thumbnails = document.querySelectorAll('.picture');
  removePictures(thumbnails);
  renderThumbnails(sortPictures(pictures, sortButton));
};


// Обработчик для сортировки без дребезга

const setDebouncedSort = (pictures) => {
  filterForm.addEventListener('click', debounce((evt) => {
    handleSortButtonClick(evt, pictures);
  }, TIMEOUT));
};

const showSortButtons = () => filterContainer.classList.remove('img-filters--inactive');

export {setDebouncedSort, showSortButtons};
