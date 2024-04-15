#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "slect one of the oppretors to perform action",
    type: "list",
    name: "oppretor",
    choices: ["Addition", "Subtraction" ,"Multipication","Division"],
  },
]);

if (answer.oppretor === "Addition"){
  console.log(answer.firstNumber + answer.secondNumber);
}else  if(answer.oppretor === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.oppretor === "Multipication"){
  console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.oppretor === "Division"){
  console.log(answer.firstNumber / answer.secondNumber);
};
console.log("The_End_THANK YOU")