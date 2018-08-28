import { expect } from 'chai';
import Robot from '../src/index';


describe('Robot Simulator', () => {
    const robot = new Robot();

    it('should be {0,0} north', () => {
      expect(robot.direction).to.equal('north');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should be {0,1} north', () => {
      const robot = new Robot();
      robot.advance();
      expect(robot.direction).to.equal('north');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(1);
    });

    it('should rotate right and be {0,0} east', () => {
      const robot = new Robot();
      robot.rotate('R');
      expect(robot.direction).to.equal('east');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });


    it('should rotate left and be {0,0} west', () => {
      const robot = new Robot();
      robot.rotate('L');
      expect(robot.direction).to.equal('west');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should rotate left and be {0,0} east when start south', () => {
      const robot = new Robot(0 ,0, 'south');
      robot.rotate('L');
      expect(robot.direction).to.equal('east');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should rotate right and be {0,0} south when start east', () => {
      const robot = new Robot(0 ,0, 'east');
      robot.rotate('R');
      expect(robot.direction).to.equal('south');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should be {0,-1} when advance south', () => {
      const robot = new Robot(0 ,0, 'south');
      robot.advance();
      expect(robot.direction).to.equal('south');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(-1);
    });

    it('should be {6, 2} when advance east', () => {
      const robot = new Robot(5, 2, 'east');
      robot.advance();
      expect(robot.direction).to.equal('east');
      expect(robot.coordinates.x).to.equal(6);
      expect(robot.coordinates.y).to.equal(2);
    });

    it('should be {-8, -4} when advance west', () => {
      const robot = new Robot(-7, -4, 'west');
      robot.advance();
      expect(robot.direction).to.equal('west');
      expect(robot.coordinates.x).to.equal(-8);
      expect(robot.coordinates.y).to.equal(-4);
    });

    it('should be {0, 1} when A', () => {
      const robot = new Robot();
      robot.move('A');
      expect(robot.direction).to.equal('north');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(1);
    });

    it('should be {0, 0} facing west when L', () => {
      const robot = new Robot();
      robot.move('L');
      expect(robot.direction).to.equal('west');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should be {0, 1} facing west when AL', () => {
      const robot = new Robot();
      robot.move('AL');
      expect(robot.direction).to.equal('west');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(1);
    });

    it('should be wrong when Q', () => {
      const robot = new Robot();
      robot.move('Q');
      expect(robot.direction).to.equal('north');
      expect(robot.coordinates.x).to.equal(0);
      expect(robot.coordinates.y).to.equal(0);
    });

    it('should be {-1, 0} facing west when RAAALLADAAA', () => {
      const robot = new Robot();
      robot.move('RAAALLADAAA');
      expect(robot.direction).to.equal('west');
      expect(robot.coordinates.x).to.equal(-1);
      expect(robot.coordinates.y).to.equal(0);
    });


  });