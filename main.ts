#! /usr/bin/env node
 
 import inquirer from "inquirer" 
let todos = [] ;
let condition = true;

while(condition){
 let addTask = await inquirer.prompt(
    [
    {
        name: "firstQuestion",
        type:"input",
        message: "what you want to add in your Todos? "
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Do you want to do more?",
      default: "true"
    }
    ]
);
    todos.push(addTask.firstQuestion); 
    condition= addTask.secondQuestion
    console.log(todos);

}