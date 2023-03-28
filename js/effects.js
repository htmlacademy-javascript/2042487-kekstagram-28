const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    unit : ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit : ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit : ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    unit : '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    unit : 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    unit : ''
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const previewImage = document.querySelector('.img-upload__preview img');
const effectsContainer = document.querySelector('.img-upload__effects');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.img-upload__effect-level');


const isDefault = () => currentEffect === DEFAULT_EFFECT;

const showSlider = () => {
  effectLevel.classList.remove('hidden');
};

const hideSlider = () => {
  effectLevel.classList.add('hidden');
};

const updateSlider = () => {
  effectSlider.noUiSlider.updateOptions({
    range: currentEffect.range,
    step: currentEffect.step,
    start: currentEffect.range.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};


// Изменение эффекта

const onEffectChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  previewImage.className = `effects__preview--${currentEffect.name}`;
  updateSlider();
};


// Обновление слайлдера

const onSliderUpdate = () => {
  const sliderValue = effectSlider.noUiSlider.get();
  effectValue.value = sliderValue;
  previewImage.style.filter = isDefault() ? DEFAULT_EFFECT.filter : `${currentEffect.filter}(${sliderValue}${currentEffect.unit})`;
};


// Сброс эффекта

const resetEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(effectSlider, {
  range: DEFAULT_EFFECT.range,
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.range.max,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
hideSlider();

effectsContainer.addEventListener('change', onEffectChange);
effectSlider.noUiSlider.on('update', onSliderUpdate);

export {resetEffect};
