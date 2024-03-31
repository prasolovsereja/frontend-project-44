import getRandomInt from './getRandomInt.js';
import getCorrectAnswer, {
  getQuestion, getAnswer, greetings, getName,
} from './index.js';

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
const getProgression = (step, hiddenElem) => {
  const progression = [];
  let elem = getRandomInt(20);
  let result = '';
  const hiddenIndex = hiddenElem - 1;
  let i = 0;
  while (i < 10) {
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
const progressionGame = () => {
  const name = getName();
  greetings(name);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 10; i += 1) {
    const progressionStep = getRandomInt(4);
    const hiddenElem = getRandomInt(10);
    const progression = getProgression(progressionStep, hiddenElem);
    getQuestion(progression.toString());
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

export default progressionGame;
