import fs from 'fs';
import os from 'os';
import logger from './logger';

const loadFile = (fileName) => {
  try {
    return fs.readFileSync(fileName, 'utf8')
      .split(os.EOL)
      .map(n => n.split(' '))
      .reduce((a, v) => (v[0] === ''
        ? a
        : [
          ...a,
          {
            type: v[0],
            data: v[1] === undefined ? '' : v[1],
          },
        ]
      ), []);
  } catch (err) {
    logger.error(`File Loading error - ${err}`);
    return false;
  }
};

export default loadFile;
