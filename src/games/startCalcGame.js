import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const description = 'What is the result of the expression?';
const getRandomOperation = (operand1, operand2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
  return result;
};

const generateRound = () => {
  const operation = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, 2);
  const num1 = getRandomNumber(1, 9);
  const num2 = getRandomNumber(1, 9);
  const question = `${num1} ${operation[operationIndex]} ${num2}`;
  const correctAnswer = getRandomOperation(num1, num2, operation[operationIndex]).toString();
  return [question, correctAnswer];
};

export default () => {
  engine(description, generateRound);
};
