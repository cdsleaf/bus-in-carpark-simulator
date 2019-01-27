import logger from '../utils/logger';
import Commands from "../command/commands";

class Bus {
  constructor(){
    this.x = null;
    this.y = null;
    this.direction = null;
  }

  get busPosition() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction,
    }
  }

  set busPosition(position) {
    this.x = position.x;
    this.y = position.y;
    this.direction = position.direction;
  }

  processCommands(inputtedCommands, carpark){
    if(!Array.isArray(inputtedCommands)) {
      logger.error('Commands should be a array type.', inputtedCommands);
      return;
    }
    const {dimensionX, dimensionY} = carpark.dimension;
    const commands = new Commands(dimensionX, dimensionY);

    inputtedCommands.forEach(inputtedCommand => {
      this.busPosition = commands.process(inputtedCommand, this.busPosition);
    })
  }
}

export default Bus;