const inquirer = require('inquirer');
const fs = require('fs');

const readmeGenerator = ({title, description1, description2, description3, description4, installation, usage, contributing1, contributing2, contributing3, license, test, questions1, questions2, questions3, questions4}) =>
`
# ${title}
${license}

## Description
${description1}

${description2}

${description3}

${description4}

## Table of Contents
- [Description](##description)

- [Installation](##installation)

- [Usage](##usage),

- [License](##license)

- [Contributors](##contributors)

- [Tests](##tests)

-[Questions](##Questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributors
${contributing1}

${contributing2}

${contributing3}

## Tests
${test}

## Questions
${questions1}

${questions2}

${questions3}

${questions4}
`;

inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        },
        {
        type: 'input',
        name: 'description1',
        message: 'What was your motivation for this project?',
        },
        {
        type: 'input',
        name: 'description2',
        message: 'Why did you build this project?' 
        },
        {
        type: 'input',
        name: 'description3',
        message: 'What problem does this project solve?',
        },
        {
        type: 'input',
        name: 'description4',
        message: 'What did you learn from doing this project?'
        },
        {
        type: 'input',
        name: 'installation',
        message: 'Input step-by-step instructions on how to install the project.',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Input instructions and examples for use of the project.',
        },
        {
        type: 'input',
        name: 'contributing1',
        message: 'Add a list of collaborators with links to their GitHub if applicable.',
        },
        {
        type: 'input',
        name: 'contributing2',
        message: 'List any third-party assets that require attribution.'
        },
        {
        type: 'input',
        name: 'contributing3',
        message: 'Include links to any tutorials followed if applicable.'
        },
        {
        type: 'list',
        name: 'license',
        message: 'Add license used.',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'SIL Open Font License 1.1', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
        type: 'input',
        name: 'test',
        message: 'Include tests for your project if available.'
        },
        {
        type: 'input',
        name: 'questions1',
        message: 'GitHub Username',
        },
        {
        type: 'input',
        name: 'questions2',
        message: 'GitHub profile link',
        },
        {
        type: 'input',
        name: 'questions3',
        message: 'Email address',
        },
        {
        type: 'input',
        name: 'questions4',
        message: 'Add instructions on how to reach yourself with additional questions.'
        }
    ])
    .then((answers) => {
        const readmeContent = readmeGenerator(answers);
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log ('README file created')
        );
    });