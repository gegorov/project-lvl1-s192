// prime game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'Answer "yes" if number is prime otherwise answer "no".';
const prime = () => {
  const number = getRandomNumber(1, 10);

  const isPrime = num => !(Array(num + 1).join(1).match(/^1?$|^(11+?)\1+$/));

  const question = `Is this number prime? ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => newGame(prime, rule);
