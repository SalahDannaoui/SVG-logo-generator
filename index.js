const inquirer = require('inquirer');
const generateSVG = require('./lib/svg-generator.js');

const questions = [
    {
        type: 'input',
        message: "Choose your text! (up to 3 letters)",
        name: 'text',
    },
    {
        type: 'input',
        message: "Choose your text color by typing in a valid color keyword or a hex number (#).",
        name: 'textColor',
    },
    {
        type: 'list',
        message: "Pick a shape.",
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: "Choose your shape color by typing in a valid color keyword or a hex number (#).",
        name: 'shapeColor',
    },
];

inquirer.prompt(questions)
    .then((result) => generateSVG.makeSVGstring(result))
    .catch((err) => console.log(err))