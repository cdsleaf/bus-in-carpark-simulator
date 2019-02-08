import logger from '../utils/logger';
import directionInfo from './directionInfo';
import {
  PLACE,
  MOVE,
  LEFT,
  RIGHT,
  REPORT,
} from './constantCommands';

export const setPlace = (dimension, newPosition, position) => {
  const [x, y, direction] = newPosition.split(',');

  if (x < 0 || y < 0 || x >= dimension.dimensionX || y >= dimension.dimensionY) {
    return { ...position };
  }

  return {
    x: Number(x),
    y: Number(y),
    direction,
  };
};

export const move = (dimension, position) => {
  const dimensionObj = {
    x: dimension.dimensionX,
    y: dimension.dimensionY,
  };
  const { type, movement } = directionInfo[position.direction];
  const moved = position[type] + movement;
  if (moved < 0 || moved === dimensionObj[type]) return { ...position };

  return {
    ...position,
    [type]: moved,
  };
};

export const turnLeft = position => ({
  ...position,
  direction: directionInfo[position.direction].LEFT,
});

export const turnRight = position => ({
  ...position,
  direction: directionInfo[position.direction].RIGHT,
});

export const printReport = (position) => {
  console.log(`Output: ${Object.values(position).join(',')}`);
  return { ...position };
};

export const command = (dimension) => {
  if (dimension.dimensionX === undefined
    || dimension.dimensionY === undefined) {
    logger.error('The dimension must have dimensionX & dimensionY properties.', dimension);
    return false;
  }
  return (position) => {
    if (position.x === undefined
      || position.y === undefined
      || position.direction === undefined) {
      logger.error('The position must have x & y & direction properties.', position);
      return false;
    }
    return (commandData) => {
      if (commandData.type === undefined || commandData.data === undefined) {
        logger.error('The Input Object must have type & data properties.', position);
        return { ...position };
      }

      if (commandData.type !== PLACE && position.direction === null) {
        logger.error('No PLACE command was executed.', position);
        return { ...position };
      }

      switch (commandData.type) {
        case PLACE:
          return setPlace(dimension, commandData.data, position);
        case MOVE:
          return move(dimension, position);
        case LEFT:
          return turnLeft(position);
        case RIGHT:
          return turnRight(position);
        case REPORT:
          return printReport(position);
        default:
          logger.error('Commands does not exist.', commandData.type);
          return { ...position };
      }
    };
  };
};
