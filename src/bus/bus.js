import Commands from "../command/command";

class Bus {
  constructor(x, y){
    if(typeof x !== 'number' || typeof y !== 'number' ) {
      throw {
        name: 'Error',
        message: 'carpark dimensions should be a number.'
      }
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
      throw {
        name: 'Error',
        message: 'Commands should be a array type.'
      }
    }

    const commands = new Commands(this.carParkDimension);

    inputtedCommands.forEach(inputtedCommand => {
      this.currentPosition = commands.process(inputtedCommand, this.currentPosition);
    })
  }
}

export default Bus;