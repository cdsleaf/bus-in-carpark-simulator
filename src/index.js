import { loadFile } from './utils/file';
import Carpark from './bus/carpark';
import Bus from './bus/bus';
import Process from './command/process';

const carpark = new Carpark(5,5);
const bus = new Bus();
const processInCarpark = new Process(carpark);

const inputtedCommands = loadFile('input.txt');

processInCarpark.processCommands(inputtedCommands, bus);