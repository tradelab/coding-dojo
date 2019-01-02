const dials = [[4, 6], [6, 8], [9, 7], [8, 4], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [4, 2]];

export default class KnightDialer {
    temp;

    hop(startingPosition: number, hops: number): number {
        this.temp.push(startingPosition);
        if (dials[startingPosition].length && hops > 0) {
            hops = hops - 1;
            dials[startingPosition].forEach(position => {
                this.hop(position, hops);
            });
        }
        return this.temp.reduce((cumul: any, value) => {
            if (!cumul.includes(value)) {
                cumul.push(value);
            }
            return cumul;
        }, []).length;
    }
}