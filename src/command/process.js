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

    inputtedCommands.forEach(inputtedCommand => {
      bus.busPosition = this.processSingleCommand(inputtedCommand, bus.busPosition);
    })
  }

  processSingleCommand(inputtedCommands, position){
    const commands = new Commands(this.dimensionX, this.dimensionY);

    if(inputtedCommands.length > 1 && inputtedCommands[0] === 'PLACE'){
       return commands.setPlace(inputtedCommands[1], position);
    }else if(inputtedCommands.length !== 1 || position.direction === null){
      return position;
    }

    switch(inputtedCommands.toString()){
      case 'MOVE':
        return commands.move(position);
      case 'LEFT':
        return commands.turnLeft(position);
      case 'RIGHT':
        return commands.turnRight(position);
      case 'REPORT':
        return commands.printReport(position);
      default: 
        return position;
    } 
  }
}

export default Process;