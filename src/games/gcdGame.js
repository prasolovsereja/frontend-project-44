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
  const number1 = getRandomNumber(1, 9);
  const number2 = getRandomNumber(1, 9);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

export default () => {
  startGames(description, generateRound);
};
