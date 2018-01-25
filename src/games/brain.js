import { cons } from 'hexlet-pairs';
import { newGame } from '..';

const rule = '';
const pairOfAnswers = cons('', '');
const game = cons(rule, pairOfAnswers);

const brainGame = () => newGame(game);

export default brainGame;
