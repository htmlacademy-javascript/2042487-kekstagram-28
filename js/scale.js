const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;
const DEFAULT_SCALE = 100;

const minifyButton = document.querySelector('.scale__control--smaller');
const magnifyButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  previewImage.style.taransform = `scale(${value / 100})`;
  scaleValueInput.value = `${value}%`;
};

const minifyImage = () => {
  const currentValue = parseInt(scaleValueInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const magnifyImage = () => {
  const currentValue = parseInt(scaleValueInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

minifyButton.addEventListener('click', minifyImage);
magnifyButton.addEventListener('click', magnifyImage);

export{resetScale};
