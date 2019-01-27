import Bus from './bus';
import Carpark from './carpark';

test('creat new bus Object.', () => {
  const newBus = new Bus();
  expect(newBus instanceof Bus).toBeTruthy();
});

test('If not array type value input, should not process', () => {

  const carpark = new Carpark(5,5);
  const testBus = new Bus();

  const expected = {
    x: null,
    y: null,
    direction: null,
  };

  testBus.processCommands('PLACE 0,0,NORTH', carpark);

  expect(testBus.busPosition).toMatchObject(expected);
})