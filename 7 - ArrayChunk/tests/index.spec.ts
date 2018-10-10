import { expect } from 'chai';
import ArrayChunk from '../src/index';


describe('Array Chunk', () => {
  const arrayChunk = new ArrayChunk();

  it('should be [[1], [2]] when [1,2] size : 2', () => {
    expect(arrayChunk.chunk([1,2], 2)).to.deep.equal([[1], [2]]);
  });

  it('should be [[1], [2], [3]] when [1,2,3] size : 3', () => {
    expect(arrayChunk.chunk([1,2, 3], 3)).to.deep.equal([[1], [2], [3]]);
  });

  it('should be [[1,2], [3,4]] when [1,2,3,4] size : 2', () => {
    expect(arrayChunk.chunk([1,2,3,4], 2)).to.deep.equal([[1,2],[3,4]]);
  });

  // it('should be [[1], [2]] when [1,2,3,4] size : 2', () => {
  //   expect(arrayChunk.chunk([1,2,3,4], 2)).to.equal([[1,2], [3,4]]);
  // });
});