import { loadFile } from './utils/file';
import Carpark from './carpark';
import Bus from './bus/bus';

const carpark = new Carpark(5,5);
const newBus = new Bus();

const inputtedCommands = loadFile('input.txt');

newBus.processCommands(inputtedCommands, carpark);