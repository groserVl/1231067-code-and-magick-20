'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW = 10;
var GAP = 40;
var FONT_GAP = 20;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_START = 230;

// Отрисовка облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Получение максимального числа (самый плохой результат)
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Фу-ия определяющая статистику результатов игры
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW, CLOUD_Y + SHADOW, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

  var maxTime = getMaxElement(times);

  // Текст в облаке
  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 1.5);
    ctx.fillText('Список результатов', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2.5);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_START + FONT_GAP);

    // Высота бара (результаты игроков)
    var barResult = (BAR_HEIGHT * times[i]) / maxTime;

    // Цифры над барами (результаты игроков)
    ctx.fillText(times[i] = Math.floor(times[i]), CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_START + barResult);

    // Цвет баров
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_START, BAR_WIDTH, barResult);
  }
};

