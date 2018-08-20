/*
  4
*
* *
* * *
* * * *
* * *
* *
*
  */

const pyramid = (num: number) => {
  let str = '';
  for (let i = 0; i < num - 1; i++) {
    str += '* '.repeat(i + 1);
    str+= '\n';
  }

  str += '* '.repeat(num);
  str += '\n';

  for (let j = num; j > 0; j--) {
    str += '* '.repeat(j - 1);
    if (j !== 1) {
      str += '\n';
    }
  }

  return str;
};

export default pyramid;