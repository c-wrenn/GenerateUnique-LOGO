class CombineSVG {
    // Constructor method
    constructor() {
        this.text = "";
        this.shape = "";
    }

    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    
    setText(textValue, textColor) {
        
        if (textValue.length > 3) {
            
            throw new Error("Please enter 1-3 characters!");
        }
        
        this.text = `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${textValue}</text>`
    }
    
    setShape(shapeValue) {
        
        this.shape = shapeValue.render();
    }
};

// Exports the SVG class to be used in other (index.js) modules
module.exports = CombineSVG;