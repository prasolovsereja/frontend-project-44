import getRandomNumber from '../getRandomNumber.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from '../index.js';

const isEven = (num) => {
  let result;
  if (num % 2 === 0) {
    result = true;
  }
  if (num % 2 !== 0) {
    result = false;
  }
  return result;
};

const startEvenGame = () => {
  const name = getName();
  greetings(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 10; i += 1) {
    const num = getRandomNumber(1, 30);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    getQuestion(num);
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

export default startEvenGame;
