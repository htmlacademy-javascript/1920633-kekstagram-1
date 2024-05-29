const photoEditorForm = document.querySelector('.img-upload__form');
const hashtagInput = photoEditorForm.querySelector('.text__hashtags');
const textareaInput = photoEditorForm.querySelector('.text__description');
const validHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(photoEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error'
});

const getHashtagArray = (value) => {
  const hashtagArray = value.split(' ');

  return hashtagArray.filter((element) => element);
};

const validateHashtag = (value) => {
  const hashtagArray = getHashtagArray(value);

  return value === '' || hashtagArray.every((hashtag) => validHashtag.test(hashtag));
};

const validateHashtagNumber = (value) => {
  const hashtagArray = getHashtagArray(value);

  return hashtagArray.length <= 5;
};
// replaceAll(' ', '')
const validateHashtagDuplicates = (value) => {
  const hashtagArray = getHashtagArray(value).map((element) => element.toLowerCase());
  const duplicates = hashtagArray.filter((item, index) => hashtagArray.indexOf(item) !== index);

  return duplicates.length === 0;
};

pristine.addValidator(hashtagInput, validateHashtag, 'Введён невалидный хэштег');
pristine.addValidator(hashtagInput, validateHashtagNumber, 'Количество хэштегов не должно превышать 5');
pristine.addValidator(hashtagInput, validateHashtagDuplicates, 'Хэштеги не должны повторяться');

const validateTextarea = (value) => value.length <= 140;

pristine.addValidator(textareaInput, validateTextarea, 'Длина комментария не должна превышать 140 символов');

photoEditorForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});
