import Bus from './bus';

test('creat new bus in carpark of dimensions 5 units x 5 units.', () => {
  const newBus = new Bus(5,5);
  expect(newBus instanceof Bus).toBeTruthy();
  expect(newBus.carParkDimension).toMatchObject({x: 5, y: 5});
});

test('If a non-numeric value input, it should not process', () => {

  const testBus1 = new Bus('test', 1);

  expect(testBus1.carParkDimension).toBeUndefined();

  const testBus2 = new Bus(1, 'test');

  expect(testBus2.carParkDimension).toBeUndefined();
})

test('If not array type value input, should not process', () => {

  const testBus = new Bus(2, 1);

  const expected = {
    x: null,
    y: null,
    direction: null,
  };

  testBus.processCommands('PLACE 0,0,NORTH');

  expect(testBus.currentPosition).toMatchObject(expected);
})