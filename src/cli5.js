import getRandomInt from './getRandomInt.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from './index.js';

const isNuberPrime = (num) => {
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
const primeGame = () => {
  const name = getName();
  greetings(name);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 10; i += 1) {
    const num = getRandomInt(20);
    getQuestion(num);
    const correctAnswer = isNuberPrime(num) ? 'yes' : 'no';
    const answer = getAnswer();
    getCorrectAnswer(answer, correctAnswer, name);
    if (answer !== correctAnswer) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default primeGame;
