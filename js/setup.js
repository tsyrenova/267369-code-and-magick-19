'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_MANTLES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT_OBJECTS = 4;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFullName() {
  var firstName = FIRST_NAMES [getRandomNumber(0, FIRST_NAMES.length - 1)];
  var lastName = LAST_NAMES [getRandomNumber(0, LAST_NAMES.length - 1)];
  return (getRandomNumber(0, 1) === 0) ? firstName + ' ' + lastName : lastName + ' ' + firstName;
}

function getRandomColor() {
  return COLOR_MANTLES [getRandomNumber(0, COLOR_MANTLES.length - 1)];
}

function getRandomEyesColor() {
  return EYES_COLOR [getRandomNumber(0, EYES_COLOR.length - 1)];
}

function generateWizards(countObjects) {
  var arr = [];
  for (var i = 0; i < countObjects; i++) {
    arr.push({
      name: getRandomFullName(FIRST_NAMES, LAST_NAMES),
      coatColor: getRandomColor(COLOR_MANTLES),
      eyesColor: getRandomEyesColor(EYES_COLOR)
    });
  }
  return arr;
}

var wizards = generateWizards(COUNT_OBJECTS);

var renderOneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderOneWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards();
