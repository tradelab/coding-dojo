import { expect } from 'chai';
import DeepSplitString from '../src/index';
import { } from './config';

describe('Deep Split String', () => {
    const deepSplitService = new DeepSplitString();

    it ('should ...', () => {
        const res = deepSplitService.split();
        expect(res).to.equal(0);
    });
});
