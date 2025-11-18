const suma = require('./suma');
test('Prueba si 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
test('Prueba si -5 + 10 es igual a 5', () => {
  expect(suma(-5, 10)).toBe(5);
});