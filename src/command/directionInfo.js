const directionInfo = {
  NORTH: {
    type: 'y',
    movement: 1,
    LEFT: 'WEST',
    RIGHT: 'EAST',
  },
  SOUTH: {
    type: 'y',
    movement: -1,
    LEFT: 'EAST',
    RIGHT: 'WEST',
  },
  EAST: {
    type: 'x',
    movement: 1,
    LEFT: 'NORTH',
    RIGHT: 'SOUTH',
  },
  WEST: {
    type: 'x',
    movement: -1,
    LEFT: 'SOUTH',
    RIGHT: 'NORTH',
  },
};

export default directionInfo;
