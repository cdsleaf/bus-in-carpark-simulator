import logger from '../utils/logger';
import Commands from "../command/commands";

class Bus {
  constructor(){
    this.currentPosition = {
      x: null,
      y: null,
      direction: null,
    };
  }

  processCommands(inputtedCommands, carpark){
    if(!Array.isArray(inputtedCommands)) {
      logger.error('Commands should be a array type.', inputtedCommands);
      return;
    }
    const {dimensionX, dimensionY} = carpark.dimension;
    const commands = new Commands(dimensionX, dimensionY);

    inputtedCommands.forEach(inputtedCommand => {
      this.currentPosition = commands.process(inputtedCommand, this.currentPosition);
    })
  }
}

export default Bus;