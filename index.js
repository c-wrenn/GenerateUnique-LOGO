const inquirer = require('inquirer');
const fs = require('fs');
//Use inheritance to reuse code



inquirer
.prompt ([
{
type: 'list',
message: "What shape would you like your LOGO?",
choices:['Triangle','Square','Circle'],
name: 'LOGOshape'
},
{
type: 'input',
message: "What color would you like your LOGO?",
name: 'LOGOcolor'
validate: (input) => {
    const colorName = allColors.includes
}
},
{
type:'input',
message: "What color would you like the LOGO background?",
name: 'LOGObackground',
},
{
type: 'input',
message: "What color would you like the text?",
name: 'textcolor'
}


]);


switch (answers.shape) {
    case 'Triangle':
        //include the code to create a triangle
        break;

    case 'Circle':
        break;
    case'Square':
        break;

    default:
        break;
}
module.export = shapes;