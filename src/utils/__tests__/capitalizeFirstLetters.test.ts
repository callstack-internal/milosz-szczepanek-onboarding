import {capitalizeFirstLetters} from '../capitalizeFirstLetters';

describe('utils: capitalizeFirstLetters', () => {
  it('should capitalize the first letter of each word in a string', () => {
    const input = 'hello world';
    const output = 'Hello World';

    expect(capitalizeFirstLetters(input)).toBe(output);
  });

  it('should handle an empty string', () => {
    const input = '';
    const output = '';

    expect(capitalizeFirstLetters(input)).toBe(output);
  });

  it('should handle a string with one word', () => {
    const input = 'hello';
    const output = 'Hello';

    expect(capitalizeFirstLetters(input)).toBe(output);
  });

  it('should handle a string with multiple spaces', () => {
    const input = 'hello   world';
    const output = 'Hello   World';

    expect(capitalizeFirstLetters(input)).toBe(output);
  });

  it('should handle a string with punctuation', () => {
    const input = 'hello, world!';
    const output = 'Hello, World!';

    expect(capitalizeFirstLetters(input)).toBe(output);
  });
});
