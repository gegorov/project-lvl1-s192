import { cons } from 'hexlet-pairs';
import { newGame } from '..';

const game = () => {
  const rule = '';
  const pairOfAnswers = cons('', '');
  return cons(rule, pairOfAnswers);
};
const brainGame = () => newGame(game);

export default brainGame;
