// Calc game logic
import { cons } from 'hexlet-pairs';
import { newGame, getRandomNumber } from '..';

const rule = 'What is the result of the expression?';
const calc = () => {
  const calculator = (operator, num1, num2) => {
    switch (operator) {
      case '-': return num1 - num2;
      case '+': return num1 + num2;
      default: return num1 * num2;
    }
  };

  const randomOperator = () => {
    const random = getRandomNumber(1, 4);
    switch (random) {
      case 1: return '-';
      case 2: return '+';
      default: return '*';
    }
  };

  const num1 = getRandomNumber(1, 101);
  const num2 = getRandomNumber(1, 101);
  const operator = randomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculator(operator, num1, num2)}`;

  return cons(question, answer);
};

const calcGame = () => newGame(calc, rule);

export default calcGame;
