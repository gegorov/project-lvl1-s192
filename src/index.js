import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const welcome = () => 'Welcome to the Brain Games!';

const getName = () => readlineSync.question('May I have your name?: ');

const bg = () => {
  const hello = welcome();
  console.log(`${hello}\n`);
  const name = getName();
  console.log(`Hello, ${name}!`);
  return 0;
};

const even = (rules) => {
  const GAME_ROUNDS = 3;
  const hello = welcome();
  console.log(hello);
  console.log(`${rules}\n`);
  const name = getName();
  console.log(`Hello, ${name}!\n`);

  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

  const game = (counter) => {
    const number = getRandomNumber();
    const question = `Question: ${number}\n`;
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const answerPair = cons(readlineSync.question(question), isEven(number));

    if (car(answerPair) !== cdr(answerPair)) {
      const errorMessage = `'${car(answerPair)}' is wrong answer ;(. Correct answer was '${cdr(answerPair)}'. Let's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
    console.log('Correct!');
    game(counter - 1);
  };

  return game(GAME_ROUNDS);
};

const startGame = (rules, type) => {
  switch (type) {
    case 'even': return even(rules);
    default: return bg();
  }
};

export default startGame;
