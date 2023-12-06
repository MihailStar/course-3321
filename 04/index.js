// http://jsbasics.geekbrains.ru

let size = 80;

drawRect(0, 0, size * 3 + 2, size * 3 + 2, 'black');

for (let x = 0; x < 3; x += 1) {
  for (let y = 0; y < 3; y += 1) {
    drawRect(size * x + 2, size * y + 2, size - 2, size - 2, 'white');
  }
}
