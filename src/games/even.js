// Even game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const even = () => {
  const rule = 'What is the result of the expression?';
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

  return cons(rule, cons(getRandomNumber, isEven));
};

const evenGame = () => newGame(even());

export default evenGame;
