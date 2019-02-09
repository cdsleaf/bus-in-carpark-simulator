import AppError from '../utils/appError';

const processCommands = (fn) => {
  if (typeof fn !== 'function') {
    throw new AppError(`The parameter 'fn' in processCommands should be a function type. ${fn}`);
  }
  return (busPosition) => {
    if (busPosition.x === undefined
      || busPosition.y === undefined
      || busPosition.direction === undefined) {
      throw new AppError(`The parameter 'busPosition' in processCommands must have x & y & direction properties. ${busPosition}`);
    }
    return (commands) => {
      if (!Array.isArray(commands)) {
        throw new AppError(`The parameter 'Commands' in processCommands should be a array type. ${commands}`);
      }
      return commands.reduce((previousPosition, singleCommand) => ({
        ...previousPosition,
        ...fn(previousPosition)(singleCommand),
      }), { ...busPosition });
    };
  };
};

export default processCommands;
