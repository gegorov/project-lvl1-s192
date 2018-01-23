import readlineSync from 'readline-sync';

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
  const hello = welcome();
  console.log(hello);
  console.log(`${rules}\n`);
  const name = getName();

  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

  const game = (counter) => {
    const number = getRandomNumber();
    const question = `Question: ${number}\n`;
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const answer = readlineSync.question(question);
    const correctAnswer = isEven(number);
    if (answer !== correctAnswer) {
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
    console.log('Correct!');
    game(counter - 1);
  };

  return game(3);
};

const startGame = (rules, type) => {
  switch (type) {
    case 'even': return even(rules);
    default: return bg();
  }
};

export default startGame;
