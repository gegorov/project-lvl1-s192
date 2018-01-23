import readlineSync from 'readline-sync';

const welcome = () => 'Welcome to the Brain Games!\n';

const greetings = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
};

const startGame = (rules) => {
  const hello = welcome();
  console.log(hello);
  greetings();
  console.log(rules);
  return 0;
};

export default startGame;
