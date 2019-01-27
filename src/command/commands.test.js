import Commands from './commands';

describe('setPlace', () => {
  let commands;
  beforeEach(() => {
    commands = new Commands(5,5);
  });

  test('should return newPosition ', () => {
  
    const position = { 
      x: null, 
      y: null, 
      direction: null
    };
    const newPosition = '3,4,EAST';
    const expected = {
      x: 3, 
      y: 4, 
      direction: 'EAST'
    };

    expect(commands.setPlace(newPosition, position)).toMatchObject(expected);
  });

  test('should return position, when the properties of newPosition is under 0 or over carParkDimension ', () => {
  
    const position = { 
      x: null, 
      y: null, 
      direction: null
    };
    let newPosition = '-3,4,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);

    newPosition = '3,-4,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);

    newPosition = '5,4,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);

    newPosition = '6,4,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);

    newPosition = '3,5,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);

    newPosition = '3,6,EAST';
    expect(commands.setPlace(newPosition, position)).toMatchObject(position);
  });
});

describe('move', () => {
  let commands;
  beforeEach(() => {
    commands = new Commands(5,5);
  });

  test('should return the new position that forwarded one step by the direction. ', () => {
  
    const position = { 
      x: 2, 
      y: 1, 
      direction: 'EAST'
    };
    const expected = {
      x: 3, 
      y: 1, 
      direction: 'EAST'
    };

    expect(commands.move(position)).toMatchObject(expected);
  });

  test('should return position, when the properties of newPosition is under 0 or over carParkDimension ', () => {
  
    const position = { 
      x: 0, 
      y: 1, 
      direction: 'WEST'
    };
    expect(commands.move(position)).toMatchObject(position);

    position.x = 4;
    position.direction = 'EAST';
    expect(commands.move(position)).toMatchObject(position);
  });
});

describe('turnLeft', () => {
  let commands;
  beforeEach(() => {
    commands = new Commands(5,5);
  });

  test('should return the direction rotated the bus 90 degrees in the specified direction without changing the position of the bus.', () => {
  
    const position = { 
      x: 2, 
      y: 1, 
      direction: 'EAST'
    };
    const expected = {
      x: 2, 
      y: 1, 
      direction: 'NORTH'
    };

    expect(commands.turnLeft(position)).toMatchObject(expected);

    position.direction = 'NORTH';
    expected.direction = 'WEST';

    expect(commands.turnLeft(position)).toMatchObject(expected);

    position.direction = 'WEST';
    expected.direction = 'SOUTH';

    expect(commands.turnLeft(position)).toMatchObject(expected);

    position.direction = 'SOUTH';
    expected.direction = 'EAST';

    expect(commands.turnLeft(position)).toMatchObject(expected);
  });
});

describe('turnRight', () => {
  let commands;
  beforeEach(() => {
    commands = new Commands(5,5);
  });

  test('should return the direction rotated the bus 90 degrees in the specified direction without changing the position of the bus.', () => {
  
    const position = { 
      x: 2, 
      y: 1, 
      direction: 'EAST'
    };
    const expected = {
      x: 2, 
      y: 1, 
      direction: 'SOUTH'
    };

    expect(commands.turnRight(position)).toMatchObject(expected);

    position.direction = 'SOUTH';
    expected.direction = 'WEST';

    expect(commands.turnRight(position)).toMatchObject(expected);

    position.direction = 'WEST';
    expected.direction = 'NORTH';

    expect(commands.turnRight(position)).toMatchObject(expected);

    position.direction = 'NORTH';
    expected.direction = 'EAST';

    expect(commands.turnRight(position)).toMatchObject(expected);
  });
});

describe('printReport', () => {
  let commands;
  beforeEach(() => {
    commands = new Commands(5,5);
  });

  test('should return position', () => {
  
    const position = { 
      x: 2, 
      y: 1, 
      direction: 'EAST'
    };
    const expected = {
      x: 2, 
      y: 1, 
      direction: 'EAST'
    };

    expect(commands.printReport(position)).toMatchObject(expected);
  });
});