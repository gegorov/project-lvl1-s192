// Even game logic
import cons from 'hexlet-pairs';
import getRandomNumber from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber);
  return cons(rules, cons(randomNumber, correctAnswer));
};


export { evenGame, isEven };
