import Carpark from './carpark';

test('should create carpark object and get dimension x,y', () => {
  const carpark = new Carpark(3,5);
  expect(carpark.dimension).toMatchObject({dimensionX:3, dimensionY:5});
});

test('If a non-numeric value input, it should not process', () => {

  const expected = {dimensionX: undefined, dimensionY: undefined};

  const carpark1 = new Carpark('test', 1);
  expect(carpark1.dimension).toMatchObject(expected);

  const carpark2 = new Carpark(1, 'test');
  expect(carpark2.dimension).toMatchObject(expected);
});