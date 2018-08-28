import { expect } from 'chai';
import Robot from '../src/index';


describe('Robot Simulator', () => {
    const robot = new Robot();

    it('should be {0,0} north', () => {
      expect(robot.direction).to.equal('north');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });
  });