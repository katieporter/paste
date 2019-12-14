import {safelySpreadBoxProps} from '../src/SafelySpreadProps';

const badProps = {
  foo: 'bar',
  borderColor: 'borderColorSuccess',
};

const goodProps = {
  foo: 'bar',
  baz: 'foo',
};

describe('safelySpreadBoxProps', () => {
  it('should throw if you pass a styling prop', () => {
    safelySpreadBoxProps(goodProps, 'test');

    expect(() => {
      safelySpreadBoxProps(badProps, 'test');
    }).toThrow();
  });
});
