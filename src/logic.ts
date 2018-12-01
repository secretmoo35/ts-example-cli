import chalk from 'chalk'
import * as ora from 'ora'
const logSymbols = require('log-symbols');

export const startProject = (answers: any) => {
    (() => {
        const spinner = ora('Running...').start();
        try {
            console.log('');
            console.log(logSymbols.success + ' ' + chalk.greenBright('Your name is ' + answers.inputName));
            spinner.stop();
            process.exit()
        } catch (error) {
            spinner.stop();
            console.log(logSymbols.error + ' ' + chalk.redBright(error));
        }
    })()
};