interface IOptions {
  excludeCount?: boolean;
}

const defaultOptions = {
  excludeCount: false,
};

/**
 * @param {string[]|string} subject string or schema array of ['singular', 'plural']
 * @param {number} [amount] amount of subjects
 * @param {IOptions} [options]
 * @param {boolean} [options.excludeCount] only return pluralized subject
 * @example
 * pluralizeWord('dog', 2)
 * // => 2 dogs
 * pluralizeWord(['person', 'people'], 2)
 * // => 2 people
 * pluralizeWord(['person', 'people'], 2, { excludeCount: true })
 * // => people
 */
export function pluralizeWord(subject: string, amount: number, options?: IOptions): string {
  const word = typeof subject === 'string' ? subject : '';

  if (!Number.isFinite(amount)) {
    return word;
  }

  const config = { ...defaultOptions, ...options };
  const count = config.excludeCount ? '' : `${amount} `;
  const schema = Array.isArray(word) ? word : [word, `${word}s`];

  return `${count}${schema[Math.abs(amount) === 1 ? 0 : 1]}`;
}
