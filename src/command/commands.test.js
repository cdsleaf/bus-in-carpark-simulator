import Commands from './commands';

test('should process PLACE commands', () => {
  const command = new Commands(5,5);
  const inputtedCommand = [ 'PLACE', '0,0,NORTH' ];
  const positoin = {
    x: null,
    y: null,
    direction: null,
  };
  const expectedValue = {
    x: 0,
    y: 0,
    direction: 'NORTH',
  }
  expect(command.process(inputtedCommand, positoin)).toMatchObject(expectedValue);
})

test('should process MOVE commands', () => {
  const command = new Commands(5,5);
  const inputtedCommand = [ 'MOVE' ];
  const positoin = {
    x: 2,
    y: 1,
    direction: 'EAST',
  };
  const expectedValue = {
    x: 3,
    y: 1,
    direction: 'EAST',
  }
  expect(command.process(inputtedCommand, positoin)).toMatchObject(expectedValue);
})

test('should process LEFT commands', () => {
  const command = new Commands(5,5);
  const inputtedCommand = [ 'LEFT' ];
  const positoin = {
    x: 2,
    y: 1,
    direction: 'EAST',
  };
  const expectedValue = {
    x: 2,
    y: 1,
    direction: 'NORTH',
  }
  expect(command.process(inputtedCommand, positoin)).toMatchObject(expectedValue);
})

test('should process RIGHT commands', () => {
  const command = new Commands(5,5);
  const inputtedCommand = [ 'RIGHT' ];
  const positoin = {
    x: 2,
    y: 1,
    direction: 'EAST',
  };
  const expectedValue = {
    x: 2,
    y: 1,
    direction: 'SOUTH',
  }
  expect(command.process(inputtedCommand, positoin)).toMatchObject(expectedValue);
})