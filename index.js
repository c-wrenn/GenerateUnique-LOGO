const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes")
const { writeFile } = require("fs/promises");
const combine = require("./lib/utils/svg-compile");
//Use inheritance to reuse code
let svgLogo;
function generateLogo() {
    inquirer
.prompt ([
{
    //Text for logo
type: 'input',
message: "Enter up to three characters for your LOGO text:",
name: 'logotext'
//add validationt hat the text entered is 
//no more than 3 characters
},
{// Color of logo
type: 'input',
message: "What color would you like the text?",
name: 'textcolor'

},
{//shape selection
type: 'list',
message: "What shape would you like your LOGO?",
choices:['Triangle','Square','Circle'],
name: 'shape'
},
{
type:'input',
message: "What color would you like the shape?",
name: 'shapecolor',
}
])
.then((res) =>{
    console.log(res)

    switch (res.shape) {
        
        case 'Triangle': 
            //include the code to create a triangle
            svgLogo = new Triangle();
            break;
        case 'Circle': 
            svgLogo = new Circle();
            break;
        case'Square':
        svgLogo = new Square();
            break;
        default:
            break;
    }
    svgLogo.setColor(res.shapecolor)

    const combine = new CombineSVG();
    combine.setText(res.logotext, res.textcolor);
    combine.setShape(svgLogo);
    return writeFile("./generated/logo.svg", svg.render());
}).then(() => {
    console.log("Your SVG logo has been successfully generated and named logo.svg in the examples folder");
});
}
// inquirer
// .prompt ([
// {
//     //Text for logo
// type: 'input',
// message: "Enter up to three characters for your LOGO text:",
// name: 'LOGOtext'
// //add validationt hat the text entered is 
// //no more than 3 characters
// },
// {// Color of logo
// type: 'input',
// message: "What color would you like the text?",
// name: 'textcolor'

// },
// {//shape selection
// type: 'list',
// message: "What shape would you like your LOGO?",
// choices:['Triangle','Square','Circle'],
// name: 'shape'
// },
// {
// type:'input',
// message: "What color would you like the shape?",
// name: 'shapecolor',
// }
// ])
// .then((res) =>{
//     console.log(res)
// let svgLogo;
//     switch (answers.shape) {
//         case 'Triangle':
//             //include the code to create a triangle
//             svgLogo = new Triangle();
//             break;
//         case 'Circle':
//             svgLogo = new Circle();
//             break;
//         case'Square':
//         svgLogo = new Square();
//             break;
//         default:
//             break;
//     }
//     svgLogo.setColor(res.shapecolor)

//     const svg = new SVG();
//     svg.setText(res.text, res.textcolor);
//     svg.setShape(svgLogo);
//     return writeFile("./generated/logo.svg", svg.render());
// }).then(() => {
//     console.log("Your SVG logo has been successfully generated and named logo.svg in the examples folder");
// });
// //};


generateLogo();