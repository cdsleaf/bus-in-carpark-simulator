import { loadFile } from './file';

test('should load a input file.', () => {
  const expectedObject = [["PLACE", "0,0,NORTH"], ["MOVE"], ["REPORT"], 
    ["PLACE", "0,0,NORTH"], ["LEFT"], ["REPORT"], ["PLACE", "1,2,EAST"], 
    ["MOVE"], ["MOVE"], ["LEFT"], ["MOVE"], ["REPORT"], ["PLACE", "5,5,SOUTH"], 
    ["MOVE"], ["MOVE"], ["REPORT"]];

  expect(loadFile('input.txt')).toMatchObject(expectedObject);
})