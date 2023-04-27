const shapes = require('./shapes.js');
const fs = require('fs');

function makeSVGstring(result) {


    if (result.text.length > 3) {
        throw new Error("Please enter a number less than 3");
    }

    let shapeString;
    let textString;

    if (result.shape === "Square") {

        const square = new shapes.Square(result.shapeColor);

        shapeString = square.render();

        textString = `<text x="94" y="181" font-size="100" text-anchor="middle" fill="${result.textColor}">`;

    } else if (result.shape === "Circle") {

        const circle = new shapes.Circle(result.shapeColor);

            shapeString = circle.render();

            textString = `<text x="150" y="140" font-size="110" text-anchor="middle" fill="${result.textColor}">`;

    } else if (result.shape === "Triangle") {

        const triangle = new shapes.Triangle(result.shapeColor);

        shapeString = triangle.render();

        textString = `<text x="145" y="180" font-size="80" text-anchor="middle" fill="${result.textColor}">`;

    }

    const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeString}${textString}${result.text}</text></svg>`;

    writeSVG(svgString);

}


// function to write svg file

function writeSVG(svgString) {

    fs.writeFile("logo.svg", svgString, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
}

module.exports = { makeSVGstring };
