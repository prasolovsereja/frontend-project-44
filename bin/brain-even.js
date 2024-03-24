#!/usr/bin/env node
import evenGame, { greetings } from '../src/cli1.js';

console.log(greetings());
console.log('Answer "yes" if number is even, otherwise answer "no"');
evenGame();
