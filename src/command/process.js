import logger from '../utils/logger';
import Commands from './commands';
import { 
  PLACE,
  MOVE,
  LEFT,
  RIGHT,
  REPORT,
} from './constantCommands';

class Process {

  constructor(carpark){
    const { dimensionX, dimensionY } = carpark.dimension;
    this.dimensionX = dimensionX;
    this.dimensionY = dimensionY;
    this.command = new Commands(dimensionX, dimensionY);
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

  processSingleCommand(commandData, position){

    if(!commandData.hasOwnProperty('type') || !commandData.hasOwnProperty('data')){
      logger.error('The Input Object must have type & data properties.', position);
      return position;
    }

    if(commandData.type !== PLACE && position.direction === null){
      logger.error('No PLACE command was executed.', position);
      return position;
    }

    switch(commandData.type){
      case PLACE:
        return this.command.setPlace(commandData.data, position);
      case MOVE:
        return this.command.move(position);
      case LEFT:
        return this.command.turnLeft(position);
      case RIGHT:
        return this.command.turnRight(position);
      case REPORT:
        return this.command.printReport(position);
      default: 
        logger.error('Commands does not exist.', commandData.type);
        return position;
    } 
  }
}

export default Process;