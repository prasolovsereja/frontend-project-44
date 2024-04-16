import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  let result = true;
  if (num <= 1) {
    return false;
  }
  if (num > 1) {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }
  return result;
};
const generateRound = () => {
  const question = getRandomNumber(1, 30);
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => {
  engine(description, generateRound);
};
