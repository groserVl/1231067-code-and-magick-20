'use strict';

// Делает блок мага видимым
var setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');
// Делает блок похожих магов видимым
var similarWizard = document.querySelector('.setup-similar');
similarWizard.classList.remove('hidden');
// Блок похожих магов
var similarListElement = document.querySelector('.setup-similar-list');

// Шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Имена магов
var nameWizards = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

// Фамилии магов
var surnameWizards = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorWizards = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColorWizards = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Функция герации случайных данных
var calculateRandom = function (propertiesWizards) {
  return propertiesWizards[Math.floor(Math.random() * propertiesWizards.length)];
};

// // Описание магов
var wizards = [
  {
    name: calculateRandom(nameWizards) + ' ' + calculateRandom(surnameWizards),
    coatColor: calculateRandom(coatColorWizards),
    eyesColor: calculateRandom(eyesColorWizards)
  },
  {
    name: calculateRandom(nameWizards) + ' ' + calculateRandom(surnameWizards),
    coatColor: calculateRandom(coatColorWizards),
    eyesColor: calculateRandom(eyesColorWizards)
  },
  {
    name: calculateRandom(nameWizards) + ' ' + calculateRandom(surnameWizards),
    coatColor: calculateRandom(coatColorWizards),
    eyesColor: calculateRandom(eyesColorWizards)
  },
  {
    name: calculateRandom(nameWizards) + ' ' + calculateRandom(surnameWizards),
    coatColor: calculateRandom(coatColorWizards),
    eyesColor: calculateRandom(eyesColorWizards)
  }
];

// Функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов
var getSimilarWizzars = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

getSimilarWizzars();
