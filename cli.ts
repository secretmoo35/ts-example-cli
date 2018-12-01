#!/usr/bin/env node
import './polyfills'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as actions from './src/logic'
import { questionsExample } from './src/questions'

const figlet = require("figlet");
const packageName = "nodejs-server-generate";
const packageJSON = require('../package.json');
const showCliName = () => {

    console.log(
        chalk.yellow(
            figlet.textSync("CLI Typescript", { horizontalLayout: "full", verticalLayout: "full" })
        )
    )
}

commander
    .version(packageJSON.version, '-v, --version')
    .description(packageName)
    .action(() => {
        showCliName()
    })

commander
    .command('start')
    .description('Start new project server with nodejs.')
    .action(() => {
        showCliName()
        console.log(
            chalk.blue('Start new project server with nodejs.')
        )
        console.log('')
        let answers = {
            inputName: ''
        };
        if (process.argv[3]) {
            answers.inputName = process.argv[3];
            actions.startProject(answers)
        } else {
            inquirer.prompt(questionsExample).then((answers) => actions.startProject(answers))
        }
    });

if (!process.argv.slice(2).length) {
    showCliName()
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)
