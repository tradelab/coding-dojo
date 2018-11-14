import { expect } from 'chai';
import KnightDialer from '../src/index';

describe('The Knight\'s Dialer', () => {
    const knightDialer = new KnightDialer();

    it ('From position 7 in 1 hop, you can dial 3 distinct numbers:  {7, 2, 6}', () => {
        expect(knightDialer.hop(7,1)).to.equal(3)
    });
});