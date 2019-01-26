import Bus from './bus';

test('creat new bus in carpark of dimensions 5 units x 5 units.', () => {
  const newBus = new Bus(5,5);
  expect(newBus instanceof Bus).toBeTruthy();
  expect(newBus.carParkDimension).toMatchObject({x: 5, y: 5});
});

test('If a non-numeric value input should throw an error.', () => {
  expect.assertions(2);

  try {
    new Bus('test', 1);
  }
  catch{
    expect(true).toBe(true);
  }

  try {
    new Bus(1, 'test');
  }
  catch{
    expect(true).toBe(true);
  }
})

test('If not array type value input, should throw an error', () => {
  try {
    new Bus(1, 1).processCommands('test');
  }
  catch{
    expect(true).toBe(true);
  }
})