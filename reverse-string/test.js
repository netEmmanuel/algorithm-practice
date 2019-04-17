const reverse = require('./index');

test('check reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse String', () => {
    expect(reverse(' damilar.e')).toEqual('e.ralimad ');
});