const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('should sum two numbers', () => {
    const result = sum(1, 1);

    expect(result).toEqual(2);
  });
});
