#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";


let {num1,num2,operator} = await inquirer.prompt([
    {
    name: "num1",
    type: "number",
        message: "Enter your first number:"
    },
    {
        name: "num2",
        type: "number",
            message: "Enter your second number:"
    },
    {
        name: "operator",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
            message: "Select operator:"
        }
]);


if (operator === "addition") {
    console.log(chalk.yellow(`The sum of two numbers = ${num1 + num2}`));
}else if (operator === "subtraction") {
    console.log(chalk.yellow(`The difference of two numbers = ${num1 - num2}`));
}else if (operator === "multiplication") {
    console.log(chalk.yellow(`The multiplication of two numbers = ${num1 * num2}`));
}else if (operator === "division") {
    console.log(chalk.yellow(`The division of two numbers = ${num1 / num2}`));
}else {
    console.log(chalk.yellow("wrong input entered"));
};