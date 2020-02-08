'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_MANTLE = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFullName() {
  if (getRandomNumber(0, 1) === 0) {
    return FIRST_NAME [getRandomNumber(0, FIRST_NAME.length - 1)] + ' ' + LAST_NAME [getRandomNumber(0, LAST_NAME.length - 1)];
  } else {
    return LAST_NAME [getRandomNumber(0, LAST_NAME.length - 1)] + ' ' + FIRST_NAME [getRandomNumber(0, FIRST_NAME.length - 1)];
  }
}

function getColor() {
  return COLOR_MANTLE [getRandomNumber(0, COLOR_MANTLE.length - 1)];
}

function getEyesColor() {
  return EYES_COLOR [getRandomNumber(0, EYES_COLOR.length - 1)];
}

function addWizards(countObjects) {
  var arr = [];
  for (var i = 0; i < countObjects; i++) {
    arr.push({
      name: getFullName(FIRST_NAME, LAST_NAME),
      coatColor: getColor(COLOR_MANTLE),
      eyesColor: getEyesColor(EYES_COLOR)
    });
  }
  return arr;
}
var WIZARDS = addWizards(4);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS.length; i++) {
  fragment.appendChild(renderWizard(WIZARDS[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
