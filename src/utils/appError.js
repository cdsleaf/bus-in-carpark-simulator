import logger from './logger';

class AppError extends Error {
  constructor(message, isOperational) {
    super(message);
    this.isOperational = isOperational;
  }
}

process.on('uncaughtException', (error) => {
  if (!error.isOperational) process.exit(1);
  logger.error(error.message);
});

export default AppError;
