import directionInfo from './directionInfo';

class Commands {
  constructor(x, y){
    this.carParkDimension = { x, y };
  }

  process(inputtedCommand, position){
    if(inputtedCommand.length > 1 && inputtedCommand[0] === 'PLACE'){
       return this.setPlace(inputtedCommand[1], position);
    }else if(inputtedCommand.length !== 1 || position.direction === null){
      return position;
    }

    switch(inputtedCommand.toString()){
      case 'MOVE':
        return this.move(position);
      case 'LEFT':
        return this.turnLeft(position);
      case 'RIGHT':
        return this.turnRight(position);
      case 'REPORT':
        return this.printReport(position);
      default: 
        return null;
    } 
  }

  setPlace (newPosition, position){
    const [x, y, direction] = newPosition.split(',');
    
    if(x < 0 || y < 0 || x >= this.carParkDimension.x || y >= this.carParkDimension.y){
      return position;
    }

    return {
      x: Number(x), 
      y: Number(y), 
      direction
    }
  }

  move (position){
    const { type, movement } = directionInfo[position.direction];
    const moved = position[type] + movement;
    
    if( moved < 0 || moved >= this.carParkDimension[type] ) return position;

    return {
      ...position,
      [type]: moved
    }
  }

  turnLeft (position){
    return {
      ...position,
      direction: directionInfo[position.direction].LEFT
    }
  }

  turnRight (position){
    return {
      ...position,
      direction: directionInfo[position.direction].RIGHT
    }
  }

  printReport (position){
    console.log(`Output: ${Object.values(position).join(',')}`);
  }
}

export default Commands;