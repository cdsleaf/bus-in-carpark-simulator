import logger from '../utils/logger';
import Commands from './commands';

class Process {

  constructor(carpark){
    const { dimensionX, dimensionY } = carpark.dimension;
    this.dimensionX = dimensionX;
    this.dimensionY = dimensionY;
  }

  processCommands(inputtedCommands, bus){
    if(!Array.isArray(inputtedCommands)) {
      logger.error('Commands should be a array type.', inputtedCommands);
      return;
    }
    const commands = new Commands(this.dimensionX, this.dimensionY);

    inputtedCommands.forEach(inputtedCommand => {
      bus.busPosition = commands.process(inputtedCommand, bus.busPosition);
    })
  }
}

export default Process;