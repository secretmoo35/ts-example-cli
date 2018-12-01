#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills");
var commander = require("commander");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var actions = require("./src/logic");
var questions_1 = require("./src/questions");
var figlet = require("figlet");
var packageName = "nodejs-server-generate";
var packageJSON = require('../package.json');
var showCliName = function () {
    console.log(chalk_1.default.yellow(figlet.textSync("CLI Typescript", { horizontalLayout: "full", verticalLayout: "full" })));
};
commander
    .version(packageJSON.version, '-v, --version')
    .description(packageName)
    .action(function () {
    showCliName();
});
commander
    .command('start')
    .description('Start with nodejs.')
    .action(function () {
    showCliName();
    console.log(chalk_1.default.blue('Start with nodejs.'));
    console.log('');
    var answers = {
        inputName: ''
    };
    if (process.argv[3]) {
        answers.inputName = process.argv[3];
        actions.startProject(answers);
    }
    else {
        inquirer.prompt(questions_1.questionsExample).then(function (answers) { return actions.startProject(answers); });
    }
});
if (!process.argv.slice(2).length) {
    showCliName();
    commander.outputHelp();
    process.exit();
}
commander.parse(process.argv);
