class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }


getPerimeter () {
    return 2 * (this.width + this.height)
}

getArea () {
    return this.width * this.height
}
}

class Square {
    constructor(length) {
        this.length = length
    }

    getPerimeter() {
        return 4 * this.length
    }

    getArea() {
        return this.length * this.length
    }
}

const rectangle = new Square(10)
console.log(`정사각형의 둘레: ${rectangle.getPerimeter()}`)
console.log(`정사각형의 넓이: ${rectangle.getArea()}`)