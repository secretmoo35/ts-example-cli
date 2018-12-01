"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var ora = require("ora");
var logSymbols = require('log-symbols');
exports.startProject = function (answers) {
    (function () {
        var spinner = ora('Running...').start();
        try {
            console.log('');
            console.log(logSymbols.success + ' ' + chalk_1.default.greenBright('Your name is ' + answers.inputName));
            spinner.stop();
            process.exit();
        }
        catch (error) {
            spinner.stop();
            console.log(logSymbols.error + ' ' + chalk_1.default.redBright(error));
        }
    })();
};
