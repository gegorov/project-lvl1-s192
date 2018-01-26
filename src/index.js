import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
// getRandomNumber The maximum is exclusive and the minimum is inclusive
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getName = () => readlineSync.question('May I have your name?: ');

const getQuestion = game => car(game);
const getCorrectAnswer = game => cdr(game);

const GAME_ROUNDS = 3;

const winMessage = name => `Congratulations, ${name}!`;
const failMessage =
(name, wrongAnswer, correctAnswer) =>
  `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`;
const correctAnswerMessage = 'Correct!';

const askQuestion = question => console.log(`Question: ${question}`);


const engine = (name, rounds, game) => {
  const round = game();

  const question = getQuestion(round);
  const correctAnswer = getCorrectAnswer(round);

  if (rounds === 0) {
    console.log(winMessage(name));
    return 0;
  }
  // console.log(`##### DEBUG print. question: ${question}, answer: ${correctAnswer}`);
  askQuestion(question);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(failMessage(name, answer, correctAnswer));
    return 0;
  }
  console.log(correctAnswerMessage);

  return engine(name, rounds - 1, game);
};

const newGame = (game, rule) => {
  welcomeMessage();

  const playerName = getName();
  console.log(`Hello, ${playerName}!\n`);

  if (rule === '') {
    return 0;
  }

  console.log(rule);
  return engine(playerName, GAME_ROUNDS, game);
};


export { newGame, getRandomNumber };
