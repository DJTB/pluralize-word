import pluralizeWord from '../src/index';

describe('index', () => {
  it('should have pluralizeWord available', () => {
    expect(pluralizeWord).toBeTruthy();
    expect(pluralizeWord('', 0)).toHaveBeenCalledWith('', 0);
  });
});
