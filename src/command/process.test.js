import processCommands from './process';

describe('processCommands', () => {
  let fn;
  let testBus;
  beforeEach(() => {
    fn = jest.fn(() => jest.fn());
    testBus = {
      busPosition: {
        x: null,
        y: null,
        direction: null,
      },
    };
  });

  test('should process the commands', () => {
    const commands = [
      { type: 'PLACE', data: '0,0,NORTH' },
      { type: 'MOVE', data: '' },
      { type: 'RIGHT', data: '' },
      { type: 'MOVE', data: '' },
      { type: 'REPORT', data: '' },
    ];

    const position = { x: 0, y: 0, direction: 'NORTH' };
    const returnFn = processCommands(fn)(position);
    returnFn(commands);

    expect(fn.mock.calls.length).toBe(5);
  });
});
