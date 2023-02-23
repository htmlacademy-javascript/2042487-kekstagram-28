/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
и максимальную длину и возвращает true, если строка меньше или равна указанной длине,
 и false, если строка длиннее.  */
const testString = 'Это пример текста';
const isStringShorter = (str, size) => str.length <= size;

isStringShorter (testString, 3);
/*Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
*/

const isPalindrome = (string) => {
  let count = 0;
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  if (tempString.length % 2 === 0) {
    count = (tempString.length) / 2;
  } else {
    if (tempString.length === 1) {
      return true;
    } else {
      count = (tempString.length - 1) / 2;
    }
  }
  for (let i = 0; i < count; i++) {
    if (tempString[i] !== tempString.slice(-1 - i)[0]) {
      return false;
    }
  }
  return true;
};

isPalindrome('Лёша на полке клопа нашёл');
isPalindrome('Тест');

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
 функция должна вернуть NaN: */

const findInt = (string) => {
  const tempString = string.replace(/[^a-zA-Z0-9]+/g,'');
  return parseInt(tempString, 10);
};

findInt('007');
findInt('1 кефир, 0.5 батона');

/*Функция, которая принимает три параметра: исходную строку, минимальную длину и
строку с добавочными символами — и возвращает исходную строку, дополненную указанными
символами до заданной длины. Символы добавляются в начало строки. Если исходная строка
превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
она обрезается с конца. */

const addSymbol = (str, minSize, addStr) => {
  const difference = minSize - str.length;
  if (difference <= 0) {
    return str;
  }
  return addStr.slice(0, difference % addStr.length) + addStr.repeat(difference / addStr.length) + str;
};

addSymbol('1', 4, '0');
