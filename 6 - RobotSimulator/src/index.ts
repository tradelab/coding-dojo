interface Coordinates {
    x: number,
    y: number
}

export default class Robot {
    direction: string;
    coordinates: Coordinates;

    constructor(x: number = 0, y: number = 0, direction: string = 'north') {
        this.direction = direction;
        this.coordinates = {x, y};
    } 
}