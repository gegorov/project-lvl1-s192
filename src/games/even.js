// Even game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question);

  return cons(question, answer);
};

const evenGame = () => newGame(even, rule);

export default evenGame;
