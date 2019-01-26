import { loadFile } from './utils/file';
import Bus from './bus/bus';

const newBus = new Bus(5,5);

const inputtedCommands = loadFile('input.txt');