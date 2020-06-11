'use strict';

// Делает блок мага видимым
var setupWizard = document.querySelector('.setup');
// setupWizard.classList.remove('hidden');
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

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Функция герации случайных данных
var getRandomProperty = function (propertiesWizards) {
  return propertiesWizards[Math.floor(Math.random() * propertiesWizards.length)];
};

// // Описание магов
var wizards = [
  {
    name: getRandomProperty(nameWizards) + ' ' + getRandomProperty(surnameWizards),
    coatColor: getRandomProperty(coatColorWizards),
    eyesColor: getRandomProperty(eyesColorWizards)
  },
  {
    name: getRandomProperty(nameWizards) + ' ' + getRandomProperty(surnameWizards),
    coatColor: getRandomProperty(coatColorWizards),
    eyesColor: getRandomProperty(eyesColorWizards)
  },
  {
    name: getRandomProperty(nameWizards) + ' ' + getRandomProperty(surnameWizards),
    coatColor: getRandomProperty(coatColorWizards),
    eyesColor: getRandomProperty(eyesColorWizards)
  },
  {
    name: getRandomProperty(nameWizards) + ' ' + getRandomProperty(surnameWizards),
    coatColor: getRandomProperty(coatColorWizards),
    eyesColor: getRandomProperty(eyesColorWizards)
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
// ------------------------------------------------------------

var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWizard.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var ipputCoatColor = document.querySelector('input[name=coat-color]');
var inputNameEyes = document.querySelector('input[name=eyes-color]');
var inputFireballColor = document.querySelector('input[name=fireball-color]');

// Инструкции (что происходит при нажатии кнопок)
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var onWizardCoatClick = function () {
  wizardCoat.style.fill = getRandomProperty(coatColorWizards);
  ipputCoatColor.value = getRandomProperty(coatColorWizards);
};

var onWizardEyesClick = function () {
  wizardEyes.style.fill = getRandomProperty(eyesColorWizards);
  inputNameEyes.value = getRandomProperty(eyesColorWizards);
};

var setupFireballClick = function () {
  fireballWrap.setAttribute('style', 'background-color: ' + getRandomProperty(fireballColors));
  inputFireballColor.value = getRandomProperty(fireballColors);
};

// Фу-ия подключения обработчиков и скрытия класса
var openPopup = function () {
  setupWizard.classList.remove('hidden');
  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireballWrap.addEventListener('click', setupFireballClick);
  document.addEventListener('keydown', onPopupEscPress);

};

//  Фу-ия отключения обработчиков и прибавление класса
var closePopup = function () {
  setupWizard.classList.add('hidden');
  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  fireballWrap.removeEventListener('click', setupFireballClick);
  document.removeEventListener('keydown', onPopupEscPress);
};

// Открытие/закрытие окна настройки персонажа
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

