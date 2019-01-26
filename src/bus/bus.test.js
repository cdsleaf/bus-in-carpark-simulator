import Bus from './bus';

test('creat new bus in carpark of dimensions 5 units x 5 units.', () => {
  const newBus = new Bus(5,5);
  expect(newBus instanceof Bus).toBeTruthy();
  expect(newBus.carParkDimension).toMatchObject({x: 5, y: 5});
});