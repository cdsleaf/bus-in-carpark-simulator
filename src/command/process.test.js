import Process from './process';
import Carpark from '../bus/Carpark';
import Bus from '../bus/Bus';

test('should create Process object and get dimension x,y', () => {
  const carpark = new Carpark(3,5);
  const processInCarpark = new Process(carpark);
  const dimension = {
    dimensionX: processInCarpark.dimensionX,
    dimensionY: processInCarpark.dimensionY
  }
  expect(dimension).toMatchObject({dimensionX:3, dimensionY:5});
});

test('should precess the commands', () => {
  const carpark = new Carpark(5,5);
  const testBus = new Bus();
  const processInCarpark = new Process(carpark);

  const commands = [["PLACE", "0,0,NORTH"], ["MOVE"], ["RIGHT"], ["MOVE"], ["REPORT"]];
  const expected = {
    x: 1,
    y: 1,
    direction: 'EAST',
  };

  processInCarpark.processCommands(commands, testBus);

  expect(testBus.busPosition).toMatchObject(expected);
})

test('If not array type value input, should not process', () => {

  const carpark = new Carpark(5,5);
  const testBus = new Bus();
  const processInCarpark = new Process(carpark);

  const expected = {
    x: null,
    y: null,
    direction: null,
  };

  processInCarpark.processCommands('PLACE 0,0,NORTH', testBus);

  expect(testBus.busPosition).toMatchObject(expected);
});