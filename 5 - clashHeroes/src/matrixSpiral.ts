/**
 * Matrix Spiral
 *
 * Write a function that accepts an integer N
 * and returns a NxN spiral matrix.
 *
 * Examples:
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
const matrix = (n): any => {
  let array = [];
  let x = 0;
  let y = 0;
  let count = 1;
  let maxValue = n - 1;
  let test = 1;
  let limit = 0;
  let action = 'r';

  for (let j = 0; j < n; j++) {
    array.push(new Array(n));
  }

  while (count !== n * n + 1) {
    array[y][x] = count;
    count++;

    switch(action) {
      case 'r':
        x = x + test;
        if (x === maxValue) {
          action = 'd';
        }
        break;

      case 'd':
        y = y + test;
        if (y === maxValue) {
          action = 'l';
        }
        break;

      case 'l':
        x = x - test;
        if (x === limit) {
          action = 'u';
          maxValue--;
          limit++;
        }
        break;

      case 'u':
        y = y - test;
        if (y === limit) {
          action = 'r';
        }
        break;
    }
  }

  return array;
}

export default matrix;