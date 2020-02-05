'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_GAP = 20;
var GAP = 10;
var WIDTH_COLUMN = 40;
var heightColumn = CLOUD_Y + CLOUD_HEIGHT - (GAP * 5) - (FONT_GAP * 4);
var WIDTH_BETWEEN_COLUMN = 50;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 2), CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + (GAP * 2), CLOUD_Y + GAP + (FONT_GAP * 2));

  function getMaxElement(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'hsl(240,' +  getRandom(0, 100) + '%' + ', 50%)';
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + (WIDTH_BETWEEN_COLUMN * (i + 1)) + (WIDTH_COLUMN * i), CLOUD_Y + CLOUD_HEIGHT - (heightColumn*times[i])/maxTime - (GAP * 2) - FONT_GAP); //150, 90
    ctx.fillRect(CLOUD_X + (WIDTH_BETWEEN_COLUMN * (i + 1)) + (WIDTH_COLUMN * i), CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, WIDTH_COLUMN, - ((heightColumn*times[i])/maxTime)); //(150, 250, 40, -150)
    ctx.fillText(names[i], CLOUD_X + (WIDTH_BETWEEN_COLUMN * (i + 1)) + (WIDTH_COLUMN * i), CLOUD_Y + CLOUD_HEIGHT - GAP); //150, 270
  }
};
