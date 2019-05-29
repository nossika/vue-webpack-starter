import utils from './index';

describe('utils', () => {
  test('sum', ()=> {
    expect(utils.sum(1, 2, 3)).toBe(6);
  });
});
