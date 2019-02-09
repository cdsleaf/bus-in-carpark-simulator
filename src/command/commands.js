import logger from '../utils/logger';
import AppError from '../utils/appError';
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
  logger.info(`Output: ${Object.values(position).join(',')}`);
  return { ...position };
};

export const command = (dimension) => {
  if (dimension.dimensionX === undefined
    || dimension.dimensionY === undefined) {
    throw new AppError(`The parameter 'dimension' in command must have dimensionX & dimensionY properties. ${dimension}`);
  }
  return (position) => {
    if (position.x === undefined
      || position.y === undefined
      || position.direction === undefined) {
      throw new AppError(`The parameter 'position' in command must have x & y & direction properties. ${position}`);
    }
    return (commandData) => {
      if (commandData.type === undefined || commandData.data === undefined) {
        throw new AppError(`The parameter 'commandData' in command must have type & data properties. ${commandData}`);
      }

      if (commandData.type !== PLACE && position.direction === null) {
        throw new AppError(`No PLACE command was executed. ${commandData}`);
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
          throw new AppError(`${commandData.type} Commands does not exist.`);
      }
    };
  };
};
