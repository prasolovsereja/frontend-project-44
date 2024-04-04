import getRandomNumber from '../getRandomNumber.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from '../index.js';

const getRandomOperation = (operand1, operand2, operation) => {
  let result = 0;
  switch (operation) {
    case 1:
      result = operand1 + operand2;
      break;
    case 2:
      result = operand1 - operand2;
      break;
    case 3:
      result = operand1 * operand2;
      break;
    default:
      console.log('default');
  }
  return result;
};
const getRandomOperationQuestion = (operation) => {
  let result = '';
  switch (operation) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    default:
      console.log('default');
  }
  return result;
};
const startCalcGame = () => {
  const name = getName();
  greetings(name);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 10; i += 1) {
    const operation = getRandomNumber(1, 3);
    const num2 = getRandomNumber(1, 11);
    const num1 = getRandomNumber(1, 11);
    const correctAnswer = getRandomOperation(num1, num2, operation);
    const mathSign = getRandomOperationQuestion(operation);
    getQuestion(num1, mathSign, num2);
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

export default startCalcGame;
