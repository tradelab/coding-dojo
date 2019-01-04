export default class RevengePancakes {
    flip(pancakes : string[], str = '-', counter = 0) : number {
        if (!pancakes.includes('-')) {
            return counter;
        }
        let index = 0;
        let element = pancakes[index];

        while(element && element !== str) {
            pancakes[index] = str;
            index++;
            element = pancakes[index];
        }
        
        counter++;
        console.log(pancakes)
        return this.flip(pancakes, str === '-' ? '+' : '-', counter);
    }
}

// +-++
// --++
// ++++