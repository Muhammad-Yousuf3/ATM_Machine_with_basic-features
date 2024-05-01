#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.gray("\n \t 'Welcome to Yousuf's ATM' \n"));


let myBalance=50000;
let myPin=3210;
//Printing atm code and balance
console.log(chalk.blue(`Your balance is ${myBalance}`))
console.log(chalk.blue("Your pin code is " + myPin));


let pin=await inquirer.prompt({
    name:"pin",
    message:chalk.green("Enter your pin please"),
    type:"number",     
})

if (myPin === pin.pin){
    console.log("Correct pin code");

    let option=await inquirer.prompt({
  name:"Options",
  message:chalk.yellow("\n Please choose any one option"),
  type:"list",
  choices:['Withdraw','CheckBalance']  
    })


    if (option.Options === 'Withdraw'){
let Withdraw_Method=await inquirer.prompt([{
    name:'withdrawMethod',
    message:chalk.red("\n Enter method of withdraw"),
    type:'list',
    choices:['FastCash','Enter Amount']
}])


if(Withdraw_Method.withdrawMethod === "Enter Amount")
    
    {
    let amount=await inquirer.prompt([{
    name:"amount",
    message:chalk.grey("\n Please Enter a amount to withdraw"),
    type:"number",
}])

if (amount.amount > myBalance)
    {console.log("Insufficient Balance!");}

else if(amount.amount < myBalance){
    console.log(chalk.blue(`\n You Withdrawed ${amount.amount}`));
    console.log(chalk.green(`\n Your remaining balance is ${myBalance - amount. amount}`));
}
}

else if (Withdraw_Method.withdrawMethod === 'FastCash'){
    let fast_cash=await inquirer.prompt([{
        name:"fastCash",
        message:chalk.blue("\n Please select an amount for Fastcash"),
        type:"list",
        choices:[10000,20000,30000,40000,50000,60000,70000]
    }])

    if(fast_cash.fastCash > myBalance){
        console.log("Insufficient Balance!");
    }
    else if(fast_cash.fastCash < myBalance){
        console.log(chalk.yellow(`\n You withdrawed ${fast_cash.fastCash}`));
        console.log(chalk.green(`\n Your remaining balance is ${myBalance - fast_cash.fastCash}`));
    }
}
    }
    else if (option.Options === 'CheckBalance'){
        console.log(chalk.blue("\n Your current balance is " + myBalance));
    }
    
}
else {
    console.log(chalk.red("Incorrect Pin!"));
}