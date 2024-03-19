import readlineSync from 'readline-sync';
const greetings = () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    return `Hello, ${name}!`;
}
export default greetings();