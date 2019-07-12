interface IOptions {
  excludeCount?: boolean;
}

const defaultOptions = {
  excludeCount: false,
};

export function pluralizeWord(
  subject: string | string[],
  amount: number,
  options?: IOptions
): string {
  if (!Number.isFinite(amount)) {
    return (Array.isArray(subject) ? subject[0] : subject) || '';
  }

  const config = { ...defaultOptions, ...options };
  const count = config.excludeCount ? '' : `${amount} `;
  const schema = Array.isArray(subject) ? subject : [subject, `${subject}s`];

  return `${count}${schema[Math.abs(amount) === 1 ? 0 : 1]}`;
}
