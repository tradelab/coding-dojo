interface Coordinates {
    x: number,
    y: number
}


const directions = {
    north: {
        L: 'west',
        R: 'east',
        A: [0, 1]
    },
    east: {
        L: 'north',
        R: 'south',
        A: [1, 0]
    },
    south: {
        L: 'east',
        R: 'west',
        A: [0, -1]
    },
    west: {
        L: 'south',
        R: 'north',
        A: [-1, 0]
    }
};

export default class Robot {
    direction: string;
    coordinates: Coordinates;

    constructor(x: number = 0, y: number = 0, direction: string = 'north') {
        this.direction = direction;
        this.coordinates = {x, y};
    } 

    advance() {
        const [x, y] = directions[this.direction].A;

        this.coordinates.x += x;
        this.coordinates.y += y;
    }

    rotate(degree) {
        this.direction = directions[this.direction][degree];
    }

    move(command){
        const autorize = [
            'L',
            'R',
            'A'
        ]
        command.split('').filter(el => autorize.includes(el))
            .forEach(letter => {
                letter === 'A' ? this.advance() : this.rotate(letter);
            });
    }
}