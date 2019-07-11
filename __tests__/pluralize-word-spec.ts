import { pluralizeWord } from '../src/pluralize-word';

describe('pluralizeWord', () => {
  describe('defaults', () => {
    it('should return an empty string if no params', () => {
      // @ts-ignore
      expect(pluralizeWord()).toBe('');
    });
    it('should not pluralize a word without a count', () => {
      // @ts-ignore
      expect(pluralizeWord('dog')).toBe('dog');
    });
    it('should pluralize a word with a count of zero', () => {
      expect(pluralizeWord('dog', 0)).toBe('0 dogs');
    });
    it('should not pluralize a word with a count of 1', () => {
      expect(pluralizeWord('dog', 1)).toBe('1 dog');
    });
    it('should pluralize a word with a count of 2', () => {
      expect(pluralizeWord('dog', 2)).toBe('2 dogs');
    });
  });

  describe('options', () => {
    describe('excludeCount', () => {
      it('should exclude count when passed with a count of 0', () => {
        expect(pluralizeWord('dog', 0, { excludeCount: true })).toBe('dogs');
      });
      it('should exclude count when passed with a count of 1', () => {
        expect(pluralizeWord('dog', 1, { excludeCount: true })).toBe('dog');
      });
      it('should exclude count when passed with a count of 2', () => {
        expect(pluralizeWord('dog', 2, { excludeCount: true })).toBe('dogs');
      });
    });
  });
});
