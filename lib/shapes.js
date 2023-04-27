const colorArray = [
    'aquamarine',
    'black',
    'blue',
    'brown',
    'darkblue',
    'darkgray',
    'forestgreen',
    'gold',
    'gray',
    'green',
    'green',
    'indigo',
    'maroon',
    'orange',
    'pink',
    'purple',
    'red',
    'silver',
    'white',
    'yellow',
]

class Triangle {
    constructor(color) {
        const colorchoice = color.toLowerCase();

        if (!colorchoice.includes("#") && !colorArray.includes(colorchoice)) {
            throw new Error("Please enter a valid color");
        }

        this.colorchoice = colorchoice;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorchoice}" />`;
    }
}

class Circle {
    constructor(color) {
        const colorchoice = color.toLowerCase();

    
        if (!colorchoice.includes("#") && !colorArray.includes(colorchoice)) {
            throw new Error("Please enter a valid color");
        }

        this.colorchoice = colorchoice;
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.colorchoice}" />`;
    }
}

class Square {
    constructor(color) {
        const colorchoice = color.toLowerCase();

        if (!colorchoice.includes("#") && !colorArray.includes(colorchoice)) {
            throw new Error("Please enter a valid color");
        }

        this.colorchoice = colorchoice;
    }

    render() {
        return `<rect x="20" y="20" width = "200" height = "200" fill="${this.colorchoice}" />`;
    }
}

module.exports = {
    Triangle,
    Square,
    Circle
};