import getRandomNumber from '../getRandomNumber.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from '../index.js';

const getHiddenElem = (arr, hiddenElem, step) => {
  const hiddenIndex = hiddenElem - 1;
  let answer;
  if (hiddenIndex !== 0) {
    answer = arr[hiddenIndex - 1] + step;
  } else {
    answer = arr[hiddenIndex + 1] - step;
  }
  return answer;
};
const getProgression = (step, hiddenElem, progressionLength) => {
  const progression = [];
  let elem = getRandomNumber(1, 20);
  let result = '';
  const hiddenIndex = hiddenElem - 1;
  let i = 0;
  while (i < progressionLength) {
    if (i === hiddenIndex) {
      progression.push('..');
      elem += step;
    } else {
      progression.push(elem);
      elem += step;
    }
    i += 1;
  }
  result = progression;
  return result;
};
const startProgressionGame = () => {
  const name = getName();
  greetings(name);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 10; i += 1) {
    const progressionStep = getRandomNumber(1, 4);
    const progressionLength = getRandomNumber(5, 13);
    const hiddenElem = progressionLength - getRandomNumber(0, progressionLength - 1);
    const progression = getProgression(progressionStep, hiddenElem, progressionLength);
    const question = progression.join(' ');
    console.log(question);
    getQuestion(question);
    const correctAnswer = getHiddenElem(progression, hiddenElem, progressionStep);
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

export default startProgressionGame;
