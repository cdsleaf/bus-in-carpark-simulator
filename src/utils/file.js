import logger from '../utils/logger';
import fs from 'fs';

export function loadFile(fileName){
  try {
    return fs.readFileSync(fileName, 'utf8')
    .split('\r\n')
    .map(n=>n.split(' '));
  }
  catch(err){
    logger.error(`File Loading error - ${err}`);
  } 
}