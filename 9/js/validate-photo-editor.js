/* eslint-disable no-console*/
const photoEditorForm = document.querySelector('.img-upload__form');
const hashtagInput = photoEditorForm.querySelector('.text__hashtags');
const textareaInput = photoEditorForm.querySelector('.text__description');
const validHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(photoEditorForm);

const getHashtagArray = (value) => value.split(' ');

const validateHashtag = (value) => {
  const hashtagArray = getHashtagArray(value);

  return value === '' || hashtagArray.every((hashtag) => validHashtag.test(hashtag));
};

const validateHashtagNumber = (value) => {
  const hashtagArray = getHashtagArray(value);

  return hashtagArray.length <= 5;
};

const validateHashtagDuplicates = (value) => {
  const hashtagArray = getHashtagArray(value).map((element) => element.toLowerCase());
  const duplicates = hashtagArray.filter((item, index) => hashtagArray.indexOf(item) !== index);

  return duplicates.length === 0;
};

pristine.addValidator(hashtagInput, validateHashtag);
pristine.addValidator(hashtagInput, validateHashtagNumber);
pristine.addValidator(hashtagInput, validateHashtagDuplicates);

const validateTextarea = (value) => value.length <= 140;

pristine.addValidator(textareaInput, validateTextarea);

photoEditorForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

console.log(validateHashtag('#keks'));
console.log(validateHashtagNumber('#keks #keks #keks #keks #keks #keks'));
console.log(validateHashtagDuplicates('#keks #flower #travel #work #KekS'));
