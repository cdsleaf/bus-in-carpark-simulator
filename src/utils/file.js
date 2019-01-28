import logger from '../utils/logger';
import fs from 'fs';

export function loadFile(fileName){
  try {
    return fs.readFileSync(fileName, 'utf8')
      .split('\r\n')
      .map(n=>n.split(' '))
      .reduce((a,v) => {
        return v[0] === ''
          ? a
          : [ 
              ...a, 
              {
                type: v[0],
                data: v[1] === undefined ? '' : v[1],
              }
          ];
      }, []);
  }
  catch(err){
    logger.error(`File Loading error - ${err}`);
  } 
}