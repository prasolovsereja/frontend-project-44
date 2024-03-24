import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const greetings = () => `Hello, ${name}!`;

export default greetings;
