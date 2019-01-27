import logger from '../utils/logger';

class Carpark {
  constructor(x, y){

    if(typeof x !== 'number' || typeof y !== 'number' ) {
      logger.error('carpark dimensions should be a number.', {x, y});
      return;
    }

    this.dimensionX = x;
    this.dimensionY = y;
  }

  get dimension() {
    return {
      dimensionX: this.dimensionX, 
      dimensionY: this.dimensionY
    };
  }
}

export default Carpark;