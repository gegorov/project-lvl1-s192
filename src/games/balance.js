// balance game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'Balance the given number.';
const balance = () => {
  const number1 = getRandomNumber(10, 9999);

  const isBalanced = (num) => {
    const numArr = String(num).split('');
    const min = Math.min(...numArr);
    const max = Math.max(...numArr);
    return max - min <= 1;
  };

  const makeBalance = (num) => {
    if (isBalanced(num)) {
      return num;
    }
    const numArr = String(num).split('').sort();

    numArr[0] = Number(numArr[0]) + 1;
    numArr[numArr.length - 1] = Number(numArr[numArr.length - 1]) - 1;
    return makeBalance(numArr.sort().join(''));
  };


  const question = `${number1}`;
  const answer = `${makeBalance(number1)}`;

  return cons(question, answer);
};

export default () => newGame(balance, rule);
