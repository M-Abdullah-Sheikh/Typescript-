#! /usr/bin/env node
import inquirer from "inquirer";

import chalk, { Chalk } from "chalk";

import chalkAnimation from 'chalk-animation';
chalkAnimation.rainbow('Welcome To Number Guessing Game');
//lets create a number guessing game
let computer_guessed = Math.round(Math.random() * 10);

console.log(chalk.red((`You have 4 tries left to guess the correct number:!`)));
let is_success=false;
for (let i = 1; i < 5; i++) {
    console.log(`Attempt no: ${i}`);
    let num1 = await inquirer.prompt([
        {
            name: "you_guessed",
            type: "number",
            message: chalk.bgBlue("Enter Your Guess Number >")
        }
    ]);
    if (num1.you_guessed === computer_guessed) {
        console.log("Congratulations! Your guess is correct.");
        is_success=true;
        break;
    }else{
        console.log("Oh No Wrong Guess")
    }
    
}
if(!is_success){
    console.log(chalk.red((`The Correct Number is ${computer_guessed} !`)));
    console.log("You Miss at this time try again later!");

}else{
    console.log("Congratulations! Yo got the Right Number");
} 