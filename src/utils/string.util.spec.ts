import { generateUUID } from './string.util';

describe('string util:', () => {
  test('generateUUID', () => {
    const re = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const result = generateUUID();
    
    expect(result).toBeDefined();
    expect(result).toMatch(re);
  });
});
