import directionInfo from './directionInfo';

class Commands {
  constructor(x, y){
    this.carParkDimension = { x, y };
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
    
    if( moved < 0 || moved === this.carParkDimension[type] ) return position;

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
    return position;
  }
}

export default Commands;