import { processCommands } from './process';

describe('processCommands', () => {

  let fn
  let testBus;
  beforeEach(() => {
    fn = jest.fn(v => jest.fn());
    testBus = {
      busPosition: {
        x: null,
        y: null,
        direction: null,
      }
    };
  });

  test('fn should be a function type. if not, it should return false.', () => {

    expect(typeof processCommands(fn)).toBe('function');

    expect(processCommands('not function')).toBe(false);

  });

  test('If the Input Object does not have x or y or direction properties, should return false ', () => {
    
    const returnFn = processCommands(fn);
    let position = {x: 0, y: 0, direction: 'NORTH'};

    expect(typeof returnFn(position)).toBe('function');

    position = { y: 0, direction: 'NORTH' };

    expect(returnFn(position)).toBe(false);

    position = {x: 0, y: 0 };

    expect(returnFn(position)).toBe(false);
  });
  
  test('If commands is not an array type, should return position', () => {
  
    const position = {x: 0, y: 0, direction: 'NORTH'};
    const returnFn = processCommands(fn)(position);
  
    expect(returnFn('PLACE 0,0,NORTH', testBus)).toMatchObject(position);
  });

  test('should process the commands', () => {

    const commands = [
      {type:'PLACE', data:"0,0,NORTH"}, 
      {type:'MOVE', data:''}, 
      {type:'RIGHT', data:''}, 
      {type:'MOVE', data:''}, 
      {type:'REPORT', data:''}, 
    ];  

    const position = {x: 0, y: 0, direction: 'NORTH'};
    const returnFn = processCommands(fn)(position);
    returnFn(commands);
  
    expect(fn.mock.calls.length).toBe(5);
  });
});