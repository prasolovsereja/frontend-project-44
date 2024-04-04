import getRandomNumber from '../getRandomNumber.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from '../index.js';

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
const startGcdGame = () => {
  const name = getName();
  greetings(name);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 10; i += 1) {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const correctAnswer = getGcd(num1, num2);
    getQuestion(num1, num2);
    const answer = Number(getAnswer());
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

export default startGcdGame;
