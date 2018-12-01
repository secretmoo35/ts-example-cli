"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsExample = [
    {
        type: 'input',
        name: 'inputName',
        message: 'Enter your name.',
        validate: function (value) {
            if (value.length) {
                return true;
            }
            else {
                return 'Please enter your name!.';
            }
        }
    }
];
