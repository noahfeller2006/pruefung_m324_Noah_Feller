import chalk from 'chalk';

console.log('Conflict');
console.log(chalk.red('It works'));

const myUnusedVariable = 'nothing';
console.log(myUnusedVariable);

const x = 10;
if (10 === x) {
  console.log('10');
}
