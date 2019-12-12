import Carpark from './carpark';

test('should create carpark object and get dimension x,y', () => {
  const carpark = new Carpark(3, 5);
  expect(carpark.dimension).toMatchObject({ dimensionX: 3, dimensionY: 5 });
});

test('should set & get carpark dimension information', () => {
  const carpark = new Carpark(10, 8);
  const expected = {
    dimensionX: 10,
    dimensionY: 8,
  };
  expect(carpark.dimension).toMatchObject(expected);
});
