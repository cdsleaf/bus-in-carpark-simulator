import fs from 'fs';
import os from 'os';
import AppError from './appError';

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
    throw new AppError(`File Loading error. - ${err}`);
  }
};

export default loadFile;
