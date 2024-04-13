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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getUniqueId, getRandomArrayElement};
