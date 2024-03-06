function checkPalindrome (string) {
  let normalizedString = string.replaceAll(' ', '');
  normalizedString = normalizedString.toLowerCase();

  let newString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }

  return newString === normalizedString;
}

console.log(checkPalindrome('топот')); // true
console.log(checkPalindrome('ДовОд')); // true
console.log(checkPalindrome('Кекс'));  // false
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true

function getInteger (string) {
  let integer = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i])) && string[i] !== ' ') {
      integer += string[i];
    }
  }

  return parseInt(integer, 10);
}

console.log(getInteger('2023 год'));            // 2023
console.log(getInteger('ECMAScript 2022'));     // 2022
console.log(getInteger('1 кефир, 0.5 батона')); // 105
console.log(getInteger('агент 007'));           // 7
console.log(getInteger('а я томат'));           // NaN

function addSymbols (string, length, newSymbols) {
  const addedLength = length - string.length;
  let newString = '';

  if (string.length >= length) {
    return string;
  }

  newString += newSymbols.slice(0, addedLength % newSymbols.length) + newSymbols.repeat(addedLength / newSymbols.length);

  return newString + string;
}

console.log(addSymbols('1', 2, '0'));      // '01'
console.log(addSymbols('1', 4, '0'));      // '0001'
console.log(addSymbols('q', 4, 'werty'));  // 'werq'
console.log(addSymbols('q', 4, 'we'));     // 'wweq'
console.log(addSymbols('qwerty', 4, '0')); // 'qwerty'

const checkLength = (string, length) => string.length <= length;

// Cтрока короче 20 символов
console.log(checkLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkLength('проверяемая строка', 10)); // false
