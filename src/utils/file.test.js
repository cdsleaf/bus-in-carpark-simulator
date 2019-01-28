import { loadFile } from './file';

test('should load a input file.', () => {
  const expectedObject = [
    { type: 'PLACE', data: '0,0,NORTH',},
    { type: 'MOVE', data: '', },
    { type: 'REPORT', data: '', },
    { type: 'PLACE', data: '0,0,NORTH', },
    { type: 'LEFT', data: '', },
    { type: 'REPORT', data: '', },
    { type: 'PLACE', data: '1,2,EAST', },
    { type: 'MOVE', data: '', },
    { type: 'MOVE', data: '', },
    { type: 'LEFT', data: '', },
    { type: 'MOVE', data: '', },
    { type: 'REPORT', data: '', },
    { type: 'PLACE', data: '5,5,SOUTH', },
    { type: 'MOVE', data: '', },
    { type: 'MOVE', data: '', },
    { type: 'REPORT', data: '', },
  ];
  
  expect(loadFile('input.txt')).toMatchObject(expectedObject);
})