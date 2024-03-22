#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number :", type: "number", name: "firstNumber" },
    { message: "Enter second number :", type: "number", name: "secondNumber" },
    {
        messege: "Select one of the operators:",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(`your value is  ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`your value is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`your value is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "division") {
    console.log(`your value is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("please select valid operator.");
}
