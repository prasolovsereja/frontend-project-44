import getRandomNumber from '../getRandomNumber.js';
import startGames from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, step, progressionLength) => {
  const progression = [];
  progression.push(firstElement);
  let elem = 0;
  let result = '';
  let i = 1;
  while (i < progressionLength) {
    elem = firstElement + i * step;
    i += 1;
    progression.push(elem);
  }
  result = progression;
  return result;
};

const generateRound = () => {
  const progressionStep = getRandomNumber(1, 4);
  const progressionLength = getRandomNumber(5, 13);
  const firstElement = getRandomNumber(1, 20);
  const hiddenElem = progressionLength - getRandomNumber(0, progressionLength - 1);
  const hiddenIndex = hiddenElem - 1;
  const progression = getProgression(firstElement, progressionStep, progressionLength);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  startGames(description, generateRound);
};
