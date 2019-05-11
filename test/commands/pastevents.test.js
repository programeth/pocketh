const cli = require('../utils/cli.js');

describe('pastevents command', () => {
  
  test('Result code should be 0', async () => {
    const result = await cli(
      'pastevents', 
      'development',
      './test/artifacts/Test.json', 
      '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      'Transfer',
      '7729780',
      '7729781',
      '1'
    );
    expect(result.code).toBe(0);
  });
});
