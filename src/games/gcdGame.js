import getRandomNumber from '../getRandomNumber.js';
import startGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  let rem = 0;
  while (b !== 0) {
    rem = a % b;
    a = b;
    b = rem;
  }
  return a;
};
const generateRound = () => {
  const num1 = getRandomNumber(1, 9);
  const num2 = getRandomNumber(1, 9);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

export default () => {
  startGames(description, generateRound);
};
