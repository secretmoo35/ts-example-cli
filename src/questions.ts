export let questionsExample: Array<Object> = [
    {
        type: 'input',
        name: 'inputName',
        message: 'Enter your name.',
        validate: (value: any) => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your name!.';
            }
        }
    }
]