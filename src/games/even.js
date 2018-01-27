// Even game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const isEven = num => num % 2 === 0;
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => newGame(even, rule);
