import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greetings = () => `Hello, ${name}!`;
const evenGame = () => {
  for (let i = 0; i < 10; i += 1) {
    const num = getRandomInt(30);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    }
    if (num % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
    if (num % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}`);
      break;
    }
  }
};
export default evenGame;
