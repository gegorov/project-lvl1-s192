// gcd game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const gcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const question = `${num1} ${num2}`;
  const answer = `${num1} ${num2}`;

  return cons(rule, cons(question, answer));
}

const gcdGame = () => newGame(gcd);

export default gcdGame;
