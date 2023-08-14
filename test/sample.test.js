function calc(a, b) {
  return a + b;
}

describe('sample test', () => {
  it('calc 1 + 2 = 3', () => {
    const actual = calc(1, 2);
    expect(actual).toBe(3);
  });

  it('calc 1 + 2 = 3', () => {
    const actual = calc(1, 3);
    expect(actual).toBe(4);
  });

  test('calc 2 + 2 = 4', () => {
    const actual = calc(2, 2);
    expect(actual).toBe(4);
  });
});

it('calc 3 + 1 = 4', () => {
  const actual = calc(3, 1);
  expect(actual).toBe(4);
});
