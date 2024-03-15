/* eslint-disable no-console*/

const DESCRIPTIONS = [
  'Как вам эта фотография?',
  'Давно увлекаюсь фотографией, могу с уверенностью сказать, что это - мой лучший кадр!',
  'Пригласили на свадьбу, надеюсь, у меня вышло запечатлеть атмосферу :)',
  'Наша группа на фоне Фудзи.',
  'Фото с собрания любителей фантастики и видеоигр.',
  'Закат на берегу океана.',
  'Наконец-то начала цвести ранняя сакура, не могу не поделиться ею и с вами!'
];

const NAMES = [
  'Алора',
  'Альберт',
  'Байлин',
  'Кассандра',
  'Матвей',
  'Нереида',
  'Персея',
  'Ричард',
  'Серафим',
  'Юлиан'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getUniqueId = (min, max) => {
  const idList = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (idList.length >= (max - min + 1)) {
      return null;
    }

    while (idList.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    idList.push(currentValue);
    return currentValue;
  };
};

const userId = getUniqueId(1, 25);
const imgUrl = getUniqueId(1, 25);
const commentId = getUniqueId(1000, 9999);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const createPost = () => ({
  id: userId(),
  url: `photos/${imgUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 10)}, generateComment)
});

console.log(createPost());

const postList = Array.from({length: 25}, createPost);

console.log(postList);
