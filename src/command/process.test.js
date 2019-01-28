import Process from './process';
import { 
  PLACE,
  MOVE,
  LEFT,
  RIGHT,
  REPORT,
} from './constantCommands';

test('should create Process object and get dimension x,y', () => {
  const carpark = {
    dimension: {
      dimensionX: 3, 
      dimensionY: 5,
    }
  }
  const process = new Process(carpark);
  const dimension = {
    dimensionX: process.dimensionX,
    dimensionY: process.dimensionY
  }
  expect(dimension).toMatchObject({dimensionX:3, dimensionY:5});
});

describe('processCommands', () => {

  let process;
  let carpark
  let testBus;
  beforeEach(() => {
    carpark = {
      dimension: {
        dimensionX: 5, 
        dimensionY: 5,
      }
    };
    testBus = {
      busPosition: {
        x: null,
        y: null,
        direction: null,
      }
    };
    process = new Process(carpark);
    process.processSingleCommand = jest.fn();
  });

  test('should process the commands', () => {

    const commands = [
      {type: PLACE, data:"0,0,NORTH"}, 
      {type:MOVE, data:''}, 
      {type:RIGHT, data:''}, 
      {type:MOVE, data:''}, 
      {type:REPORT, data:''}, 
    ];  
    process.processCommands(commands, testBus);
  
    expect(process.processSingleCommand.mock.calls.length).toBe(5);
  });
  
  test('If not array type value input, should not process', () => {
  
    process.processCommands(`${PLACE} 0,0,NORTH`, testBus);
  
    expect(process.processSingleCommand.mock.calls.length).toBe(0);
  });
});

describe('processSingleCommand', () => {

  let carpark;
  let process; 
  beforeAll(() => {
    carpark = {
      dimension: {
        dimensionX: 5, 
        dimensionY: 5,
      }
    };
    process = new Process(carpark);
  });

  test('If the Input Object does not have type or data properties, should return position', () => {
    const position = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };
    let inputtedCommand = {type: PLACE};
    let expected = {
      x: 2,
      y: 1,
      direction: 'EAST',
    };

    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expected);

    inputtedCommand = { data:"0,0,NORTH" };

    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expected);
  });

  test('should process PLACE commands', () => {
    const inputtedCommand = {type: PLACE, data:"0,0,NORTH"};
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
    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expectedValue);
  });
  
  test('should process MOVE commands', () => {
    const inputtedCommand = {type:MOVE, data:''};
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
    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expectedValue);
  });
  
  test('should process LEFT commands', () => {
    const inputtedCommand = {type:LEFT, data:''};
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
    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expectedValue);
  });
  
  test('should process RIGHT commands', () => {
    const inputtedCommand = {type:RIGHT, data:''};
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
    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expectedValue);
  });

  test('should return position, when the command does not exist in the command class', () => {
    const inputtedCommand = {type: 'NOT_EXIST_COMMAND', data: ''};
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
    expect(process.processSingleCommand(inputtedCommand, position)).toMatchObject(expectedValue);
  });
});
