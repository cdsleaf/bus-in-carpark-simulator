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
}

export default Bus;