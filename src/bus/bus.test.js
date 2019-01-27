import Bus from './bus';
import Carpark from './carpark';

test('creat new bus Object.', () => {
  const newBus = new Bus();
  expect(newBus instanceof Bus).toBeTruthy();
});

test('should set & get Bus position information', () => {
  const newBus = new Bus();
  const position = {
    x: 2,
    y: 5,
    direction: 'NORTH',
  }
  newBus.busPosition = position;
  expect(newBus.busPosition).toMatchObject(position);
});