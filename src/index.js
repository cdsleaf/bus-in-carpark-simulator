import loadFile from './utils/file';
import Carpark from './bus/carpark';
import Bus from './bus/bus';
import processCommands from './command/process';
import { command } from './command/commands';

const carpark = new Carpark(5, 5);
const bus = new Bus();
const runCommand = command(carpark.dimension);

const commands = loadFile('input.txt');

bus.busPosition = processCommands(runCommand)(bus.busPosition)(commands);
