import readlineSync from 'readline-sync';

const getCorrectAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  }
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};
export const getName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greetings = (name) => console.log(`Hello, ${name}!`);
export const getQuestion = (question, question1 = '', question2 = '') => console.log(`Question: ${question} ${question1} ${question2}`);
export const getAnswer = () => readlineSync.question('Your answer: ');
export default getCorrectAnswer;
