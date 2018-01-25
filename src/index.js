import readlineSync from 'readline-sync';
import { car, cdr, toString } from 'hexlet-pairs';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getName = () => readlineSync.question('May I have your name?: ');
const getDescription = game => car(game);
const getQA = game => cdr(game);
const getNumber = qa => car(qa);
const getCorrectAnswer = qa => cdr(qa);

const GAME_ROUNDS = 3;

const winMessage = name => `Congratulations, ${name}!`;
const failMessage =
(name, wrongAnswer, correctAnswer) =>
  `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`;
const correctAnswerMessage = 'Correct!';

const askQuestion = number => console.log(`Question: ${number}`);


const engine = (name, rounds, game) => {
  const round = game();

  console.log(`####### ${toString(round)}`);
  const pairQA = getQA(round);
  const number = getNumber(pairQA);
  const correctAnswer = getCorrectAnswer(pairQA);

  if (rounds === 0) {
    console.log(winMessage(name));
    return 0;
  }

  askQuestion(number);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(failMessage(name, answer, correctAnswer));
    return 0;
  }
  console.log(correctAnswerMessage);

  return engine(name, rounds - 1, game);
};

const newGame = (game) => {
  welcomeMessage();
  const round = game();
  const playerName = getName();
  console.log(`Hello, ${playerName}!\n`);
  const rules = getDescription(round);
  if (rules === '') {
    return 0;
  }

  console.log(rules);
  return engine(playerName, GAME_ROUNDS, game);
};


export { newGame, getRandomNumber };
