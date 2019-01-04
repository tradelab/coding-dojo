import { expect } from 'chai';
import RevengePancakes from '../src/index';

describe('The Revenge of the pancakes', () => {
    const pancakes = new RevengePancakes();

    it ('should flip 0 time when pancakes [+]', () => {
        const res = pancakes.flip(['+']);
        expect(res).to.equal(0);
    });
    it ('should flip 1 when pancakes [-]', () => {
        const res = pancakes.flip(['-']);
        expect(res).to.equal(1);
    });
    // it ('should flip 1 when pancakes [-,+]', () => {
    //     const res = pancakes.flip(['-', '+']);
    //     expect(res).to.equal(1);
    // });
    // it ('should flip 2 when pancakes [+,-]', () => {
    //     const res = pancakes.flip(['+', '-']);
    //     expect(res).to.equal(2);
    // });
    // it ('should flip 3 when pancakes [-,-,+,-]', () => {
    //     const res = pancakes.flip(['-', '-', '+', '-']);
    //     expect(res).to.equal(3);
    // });
});
