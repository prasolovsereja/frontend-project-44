import getRandomNumber from '../getRandomNumber.js';
import startGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startGames(description, generateRound);
};
