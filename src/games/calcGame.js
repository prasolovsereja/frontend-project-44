import getRandomNumber from '../getRandomNumber.js';
import startGames from '../index.js';

const description = 'What is the result of the expression?';
const calculate = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, operators.length - 1);
  const operand1 = getRandomNumber(1, 9);
  const operand2 = getRandomNumber(1, 9);
  const question = `${operand1} ${operators[operationIndex]} ${operand2}`;
  const answer = calculate(operand1, operand2, operators[operationIndex]).toString();
  return [question, answer];
};

export default () => {
  startGames(description, generateRound);
};
