import logger from '../utils/logger';
import Commands from "../command/commands";

class Bus {
  constructor(x, y){
    if(typeof x !== 'number' || typeof y !== 'number' ) {
      logger.error('carpark dimensions should be a number.', {x, y});
      return;
    }
    this.carParkDimension = { x, y }
    this.currentPosition = {
      x: null,
      y: null,
      direction: null,
    };
  }

  processCommands(inputtedCommands){
    if(!Array.isArray(inputtedCommands)) {
      logger.error('Commands should be a array type.', inputtedCommands);
      return;
    }

    const commands = new Commands(this.carParkDimension.x, this.carParkDimension.y);

    inputtedCommands.forEach(inputtedCommand => {
      this.currentPosition = commands.process(inputtedCommand, this.currentPosition);
    })
  }
}

export default Bus;