import { loadFile } from './file';

test('should load a input file.', () => {
  const expectedObject = [['PLACE', '0,0,NORTH'], ['MOVE'], ['REPORT']];

  expect(loadFile('input.txt')).toMatchObject(expectedObject);
})