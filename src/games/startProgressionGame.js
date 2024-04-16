import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (step, progressionLength) => {
  const progression = [];
  let elem = getRandomNumber(1, 20);
  let result = '';
  let i = 0;
  while (i < progressionLength) {
    progression.push(elem);
    elem += step;
    i += 1;
  }
  result = progression;
  return result;
};

const generateRound = () => {
  const progressionStep = getRandomNumber(1, 4);
  const progressionLength = getRandomNumber(5, 13);
  const hiddenElem = progressionLength - getRandomNumber(0, progressionLength - 1);
  const hiddenIndex = hiddenElem - 1;
  const progression = getProgression(progressionStep, progressionLength);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  engine(description, generateRound);
};
