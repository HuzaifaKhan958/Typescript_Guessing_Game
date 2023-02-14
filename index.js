#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`Common Let's Start Playing !!!!`);
    await sleep();
    rainbowTitle.stop();
}
let playerLife = 3;
async function askQuestion() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(`Player life left ${playerLife}`);
        var que = await inquirer
            .prompt([
            {
                type: "number",
                name: "usr_num",
                message: chalk.rgb(250, 128, 144)("Please select any number between 1-10: ")
            }
        ]);
        if (que.usr_num === randomNumber) {
            console.log(chalk.green(`Congratulations!!! You guessed the right number`));
        }
        else if (que.usr_num < randomNumber) {
            console.log(chalk.red(`Your number ${que.usr_num} is less then the guess number`));
        }
        else if (que.usr_num > randomNumber) {
            console.log(chalk.red(`Your number ${que.usr_num} is greater then the guess number`));
        }
    } while (playerLife > 0 && randomNumber !== que.usr_num);
    if (playerLife == 0 && randomNumber !== que.usr_num) {
        console.log(chalk.redBright(`Game Over Go Home Looser!!!`));
    }
}
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer
            .prompt([
            {
                type: "input",
                name: "start_again",
                message: chalk.rgb(250, 128, 114)("Do you want to restart the game? Press Y or N: ")
            }
        ]);
    } while (restart.start_again === 'y' || restart.start_again === 'Y' || restart.start_again === 'yes' || restart.start_again === 'YES');
}
startAgain();
