import { expect } from 'chai';
import KnightDialer from '../src/index';

describe('The Knight\'s Dialer', () => {
    const knightDialer = new KnightDialer();

    it ('From position 7 in 1 hop, you can dial 3 distinct numbers:  {7, 2, 6}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(7,1)).to.equal(3);
    });

    it ('From position 1 in 2 hop, you can dial 6 distinct numbers:  {1, 8, 6, 7, 3, 0}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(1,2)).to.equal(6);
    });

    it ('From position 5 in 1 hop, you can dial 1 distinct numbers:  {5}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(5,1)).to.equal(1);
    });

    it ('From position 1 in 3 hop, you can dial 6 distinct numbers:  {1, 8, 6, 7, 3, 0, 2, 4}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(1,3)).to.equal(8);
    });

    it ('From position 6 in 4 hop, you can dial 6 distinct numbers:  {1, 8, 6, 7, 3, 0, 2, 4, 9}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(1,4)).to.equal(9);
    });

    it ('From position 2 in 3 hop, you can dial 6 distinct numbers:  {7, 9, 6, 4, 1, 3, 0, 2}', () => {
        knightDialer.temp = [];
        expect(knightDialer.hop(2,3)).to.equal(8);
    });
});