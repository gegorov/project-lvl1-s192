// gcd game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const gcDivisor = () => {
  const number1 = getRandomNumber(1, 101);
  const number2 = getRandomNumber(1, 101);

  const gcd = (num1, num2) => {
    const dividend = Math.max(num1, num2);
    const divisor = Math.min(num1, num2);
    const remainder = dividend % divisor;
    if (remainder === 0) {
      return divisor;
    }
    return gcd(divisor, remainder);
  };

  const result = gcd(number1, number2);

  const question = `${number1} ${number2}`;
  const answer = `${result}`;

  return cons(question, answer);
};

export default () => newGame(gcDivisor, rule);
