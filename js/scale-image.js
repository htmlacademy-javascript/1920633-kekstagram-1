const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const currentPhoto = document.querySelector('.img-upload__preview img');

scaleInput.value = '100%';
let currentValue = parseInt(scaleInput.value, 10);

buttonSmaller.addEventListener('click', () => {
  if (currentValue <= 25) {
    return false;
  }

  currentValue = currentValue - 25;

  const currentScale = currentValue / 100;

  scaleInput.value = `${currentValue}%`;
  currentPhoto.style.transform = `scale(${currentScale})`;
});

buttonBigger.addEventListener('click', () => {
  if (currentValue >= 100) {
    return false;
  }

  currentValue = currentValue + 25;

  const currentScale = currentValue / 100;

  scaleInput.value = `${currentValue}%`;
  currentPhoto.style.transform = `scale(${currentScale})`;
});
