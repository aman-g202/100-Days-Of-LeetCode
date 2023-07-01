console.time('aman');
class Wheel {
    constructor() {
        if (this.constructor.name === 'Wheel') {
            throw new Error('Abstarct class can not be instantiated');
        }
    }

    dimensions(length, width) {
        throw new Error('Abstarct method can not be called directly, implement it in inheriting classs');
    }
}

class Car extends Wheel {
    constructor() {
        super()
    }

    dimensions(length, width) {
        return length * width;
    }
}

const a = new Car();
console.log( a.dimensions(10,20));
console.timeEnd('aman')