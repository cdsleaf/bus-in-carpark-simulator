import logger from '../utils/logger';

const processCommands = (fn) => {
  if (typeof fn !== 'function') {
    logger.error('The fn should be a function type.', fn);
    return false;
  }
  return (busPosition) => {
    if (busPosition.x === undefined
      || busPosition.y === undefined
      || busPosition.direction === undefined) {
      logger.error('The busPosition must have x & y & direction properties.', busPosition);
      return false;
    }
    return (commands) => {
      if (!Array.isArray(commands)) {
        logger.error('Commands should be a array type.', commands);
        return {
          ...busPosition,
        };
      }
      return commands.reduce((previousPosition, singleCommand) => ({
        ...previousPosition,
        ...fn(previousPosition)(singleCommand),
      }), { ...busPosition });
    };
  };
};

export default processCommands;
