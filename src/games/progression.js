// progression game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'What number is missing in this progression?';
const progression = () => {
  const prgLength = 10;

  const makePrg = (num) => {
    const randomStarter = getRandomNumber(-100, 100);
    const prgStep = getRandomNumber(1, 10);
    const fillPrg = (array, counter) => {
      if (counter === 0) {
        return array;
      }
      array.push(array[array.length - 1] + prgStep);
      return fillPrg(array, counter - 1);
    };
    return fillPrg([randomStarter], num - 1);
  };

  const newProgression = makePrg(prgLength);

  const indexOfHiddenElement = getRandomNumber(0, prgLength);
  const secretElement = newProgression[indexOfHiddenElement];


  const maskedProgression = (inputProgression, index) => {
    const mask = '..';
    const result = inputProgression.map(e => String(e));
    result[index] = mask;
    return result.join(' ');
  };

  const question = `${maskedProgression(newProgression, indexOfHiddenElement)}`;
  const answer = `${secretElement}`;

  return cons(question, answer);
};

export default () => newGame(progression, rule);
