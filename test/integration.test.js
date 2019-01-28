import { loadFile } from '../src/utils/file';
import Carpark from '../src/bus/carpark';
import Bus from '../src/bus/bus';
import { processCommands } from '../src/command/process';
import { command } from '../src/command/commands';

let carpark;
let newBus;
let runCommand;

beforeEach(() => {
  carpark = new Carpark(5,5);
  newBus = new Bus();
  runCommand = command(carpark.dimension);
});

test('Typical cases', () => {
  const expected = {
    x: 3, y: 4, direction: 'NORTH'
  }
  const inputtedCommands = loadFile('./test/typicalCase.txt');
  expect(processCommands(runCommand)(newBus.busPosition)(inputtedCommands)).toMatchObject(expected);
})

test('commands without PLACE cases', () => {
  const expected = {
    x: null, y: null, direction: null
  }
  const inputtedCommands = loadFile('./test/commandsWithoutPlaceCase.txt');
  expect(processCommands(runCommand)(newBus.busPosition)(inputtedCommands)).toMatchObject(expected);
})

test('too many move commands - 0,0,NORTH -> 10 MOVES -> RIGHT -> MOVE', () => {
  const expected = {
    x: 1, y: 4, direction: 'EAST'
  }
  const inputtedCommands = loadFile('./test/tooManyMoveCommands.txt');
  expect(processCommands(runCommand)(newBus.busPosition)(inputtedCommands)).toMatchObject(expected);
})

test('commands without MOVE case - 0,0,NORTH -> 3 LEFT, 1 RIGHT', () => {
  const expected = {
    x: 0, y: 0, direction: 'SOUTH'
  }
  const inputtedCommands = loadFile('./test/commandsWithoutMoveCase.txt');
  expect(processCommands(runCommand)(newBus.busPosition)(inputtedCommands)).toMatchObject(expected);
})

