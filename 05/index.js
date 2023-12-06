// http://jsbasics.geekbrains.ru

function drawGrid(x, y, size) {
  let cellSize = (size - 2 * 2) / 3;

  for (let i = 1; i <= 2; i += 1) {
    drawRect(x + cellSize * i, y, 2, size, 'black');
    drawRect(x, y + cellSize * i, size, 2, 'black');
  }
}

drawGrid(0, 0, 274);
drawGrid(46, 46, 181);
drawGrid(92, 92, 88);
