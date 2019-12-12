import {
  command,
  setPlace,
  move,
  turnLeft,
  turnRight,
  printReport,
} from './commands';
import { PLACE, MOVE, LEFT, RIGHT, REPORT } from './constantCommands';

describe('command', () => {
  let dimension;
  beforeEach(() => {
    dimension = {
      dimensionX: 5,
      dimensionY: 5,
    };
  });

  test('should process PLACE commands', () => {
    const inputtedCommand = { type: PLACE, data: '0,0,NORTH' };
    const position = {
      x: null,
      y: null,
      direction: null,
    };
    const expectedValue = {
      x: 0,
      y: 0,
      direction: 'NORTH',
    };
    expect(command(dimension)(position)(inputtedCommand)).toMatchObject(
      expectedValue
    );
  });

  test('should process MOVE commands', () => {
    const inputtedCommand = { type: MOVE, data: '' };
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expectedValue = {
      x: 3,
      y: 1,
      direction: 'EAST',
    };
    expect(command(dimension)(position)(inputtedCommand)).toMatchObject(
      expectedValue
    );
  });

  test('should process LEFT commands', () => {
    const inputtedCommand = { type: LEFT, data: '' };
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expectedValue = {
      x: 2,
      y: 1,
      direction: 'NORTH',
    };
    expect(command(dimension)(position)(inputtedCommand)).toMatchObject(
      expectedValue
    );
  });

  test('should process RIGHT commands', () => {
    const inputtedCommand = { type: RIGHT, data: '' };
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expectedValue = {
      x: 2,
      y: 1,
      direction: 'SOUTH',
    };
    expect(command(dimension)(position)(inputtedCommand)).toMatchObject(
      expectedValue
    );
  });

  test('should process REPORT commands', () => {
    const inputtedCommand = { type: REPORT, data: '' };
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expectedValue = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    expect(command(dimension)(position)(inputtedCommand)).toMatchObject(
      expectedValue
    );
  });
});

describe('setPlace', () => {
  let dimension;
  beforeEach(() => {
    dimension = {
      dimensionX: 5,
      dimensionY: 5,
    };
  });

  test('should return newPosition ', () => {
    const position = {
      x: null,
      y: null,
      direction: null,
    };
    const newPosition = '3,4,EAST';
    const expected = {
      x: 3,
      y: 4,
      direction: 'EAST',
    };

    expect(setPlace(dimension, newPosition, position)).toMatchObject(expected);
  });

  test('should return position, when the properties of newPosition is under 0 or over carParkDimension ', () => {
    const position = {
      x: null,
      y: null,
      direction: null,
    };
    let newPosition = '-3,4,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);

    newPosition = '3,-4,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);

    newPosition = '5,4,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);

    newPosition = '6,4,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);

    newPosition = '3,5,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);

    newPosition = '3,6,EAST';
    expect(setPlace(dimension, newPosition, position)).toMatchObject(position);
  });
});

describe('move', () => {
  let dimension;
  beforeEach(() => {
    dimension = {
      dimensionX: 5,
      dimensionY: 5,
    };
  });

  test('should return the new position that forwarded one step by the direction. ', () => {
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expected = {
      x: 3,
      y: 1,
      direction: 'EAST',
    };

    expect(move(dimension, position)).toMatchObject(expected);
  });

  test('should return position, when the properties of newPosition is under 0 or over carParkDimension ', () => {
    const position = {
      x: 0,
      y: 1,
      direction: 'WEST',
    };
    expect(move(dimension, position)).toMatchObject(position);

    position.x = 4;
    position.direction = 'EAST';
    expect(move(dimension, position)).toMatchObject(position);
  });
});

describe('turnLeft', () => {
  test('should return the direction rotated the bus 90 degrees in the specified direction without changing the position of the bus.', () => {
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expected = {
      x: 2,
      y: 1,
      direction: 'NORTH',
    };

    expect(turnLeft(position)).toMatchObject(expected);

    position.direction = 'NORTH';
    expected.direction = 'WEST';

    expect(turnLeft(position)).toMatchObject(expected);

    position.direction = 'WEST';
    expected.direction = 'SOUTH';

    expect(turnLeft(position)).toMatchObject(expected);

    position.direction = 'SOUTH';
    expected.direction = 'EAST';

    expect(turnLeft(position)).toMatchObject(expected);
  });
});

describe('turnRight', () => {
  test('should return the direction rotated the bus 90 degrees in the specified direction without changing the position of the bus.', () => {
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expected = {
      x: 2,
      y: 1,
      direction: 'SOUTH',
    };

    expect(turnRight(position)).toMatchObject(expected);

    position.direction = 'SOUTH';
    expected.direction = 'WEST';

    expect(turnRight(position)).toMatchObject(expected);

    position.direction = 'WEST';
    expected.direction = 'NORTH';

    expect(turnRight(position)).toMatchObject(expected);

    position.direction = 'NORTH';
    expected.direction = 'EAST';

    expect(turnRight(position)).toMatchObject(expected);
  });
});

describe('printReport', () => {
  test('should return position', () => {
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    const expected = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };

    expect(printReport(position)).toMatchObject(expected);
  });
});
