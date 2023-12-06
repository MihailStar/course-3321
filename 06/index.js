// http://jsbasics.geekbrains.ru

function drawPriceChangeChart(prices, chartWidth, chartHeight) {
  let riskWidth = 2;
  let riskHeight = 10;

  let maximumPrice = Math.max(...prices);

  let xStep = chartWidth / (prices.length - 1);
  let yStep = chartHeight / maximumPrice;

  function drawBackground() {
    drawRect(
      0,
      0,
      chartWidth + riskHeight * 2,
      chartHeight + riskHeight * 2,
      'white'
    );
    drawRect(riskHeight, riskHeight, chartWidth, chartHeight, 'black');

    for (let index = 1; index < prices.length - 1; index += 1) {
      let x = riskHeight + xStep * index - riskWidth / 2;

      drawRect(x, 0, riskWidth, riskHeight, 'black');
      drawRect(x, riskHeight, riskWidth, chartHeight, 'gray');
      drawRect(x, chartHeight + riskHeight, riskWidth, riskHeight, 'black');
    }
  }

  function drawGraph() {
    let previousX = riskHeight;
    let previousY = riskHeight + yStep * (maximumPrice - prices[0]);

    let dotSize = 6;

    drawRect(
      previousX - dotSize / 2,
      previousY - dotSize / 2,
      dotSize,
      dotSize,
      'red'
    );

    for (let index = 1; index < prices.length; index += 1) {
      let x = riskHeight + xStep * index;
      let y = riskHeight + yStep * (maximumPrice - prices[index]);

      drawLine(previousX, previousY, x, y, 'red');
      drawRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize, 'red');

      previousX = x;
      previousY = y;
    }
  }

  drawBackground();
  drawGraph();
}

let prices = [
  100, 120, 90, 100, 130, 115, 210, 230, 60, 80, 90, 100, 103, 107, 114, 150,
];

drawPriceChangeChart(prices, 400, 300);
