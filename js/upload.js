const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  // Проверка типа файла
  const matches = FILE_TYPES.some((value) => fileName.endsWith(value));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
