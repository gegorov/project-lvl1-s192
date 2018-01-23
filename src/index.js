import readlineSync from 'readline-sync';

const actual = readlineSync.question('Your answer: ');
console.log(`Hello, ${actual}`);
