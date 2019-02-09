import AppError from '../utils/appError';

class Carpark {
  constructor(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new AppError(`carpark dimensions should be a number. x: ${x}, y: ${y}`, true);
    }

    this.dimensionX = x;
    this.dimensionY = y;
  }

  get dimension() {
    return {
      dimensionX: this.dimensionX,
      dimensionY: this.dimensionY,
    };
  }
}

export default Carpark;
