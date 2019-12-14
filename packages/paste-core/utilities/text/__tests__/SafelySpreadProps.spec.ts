import {safelySpreadTextProps} from '../src/SafelySpreadProps';

const badProps = {
  foo: 'bar',
  textColor: 'textColorSuccess',
};

const goodProps = {
  foo: 'bar',
  baz: 'foo',
};

describe('safelySpreadTextProps', () => {
  it('should throw if you pass a styling prop', () => {
    safelySpreadTextProps(goodProps, 'test');

    expect(() => {
      safelySpreadTextProps(badProps, 'test');
    }).toThrow();
  });
});
