const shapes = require('./shapes.js');

describe('Square Hex color test', () => {
    it('should create a yellow square, using hex code', () => {

        const Square = new shapes.Square("#FFDB58");

        expect(Square.render()).toEqual('<rect x="20" y="20" width = "200" height = "200" fill="#ffdb58" />');

    });
});

describe('Circle test', () => {
    it('should create a black circle', () => {

        const Circle = new shapes.Circle("black");

        expect(Circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="black" />');

    });
});

describe('Triangle test', () => {
    it('should create a green triangle', () => {

        const triangle = new shapes.Triangle("green");

        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');

    });
});


