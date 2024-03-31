import getRandomInt from '../getRandomInt.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from '../index.js';

const getRandomOperation = (operand1, operand2, operation) => {
  let result = 0;
  switch (operation) {
    case 0:
      result = operand1 + operand2;
      break;
    case 1:
      result = operand1 - operand2;
      break;
    case 2:
      result = operand1 * operand2;
      break;
    default:
      console.log('default');
  }
  return result;
};
const getRandomOperationQuestion = (operand1, operand2, operation) => {
  let result = '';
  switch (operation) {
    case 0:
      result = `${operand1} + ${operand2}`;
      break;
    case 1:
      result = `${operand1} - ${operand2}`;
      break;
    case 2:
      result = `${operand1} * ${operand2}`;
      break;
    default:
      console.log('default');
  }
  return result;
};
const calcGame = () => {
  const name = getName();
  greetings(name);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 10; i += 1) {
    const operation = getRandomInt(3);
    const num1 = getRandomInt(11);
    const num2 = getRandomInt(11);
    const correctAnswer = getRandomOperation(num1, num2, operation);
    getQuestion(getRandomOperationQuestion(num1, num2, operation));
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

export default calcGame;
