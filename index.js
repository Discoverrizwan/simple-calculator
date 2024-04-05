#!  /usr/bin/env  node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first Number", type: "number", name: "firstNumber" },
    { messsage: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// Conditional Statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
