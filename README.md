# Pluralize Word

[![NPM Version](http://img.shields.io/npm/v/pluralize-word.svg?style=flat)](https://npmjs.org/package/pluralize-word)
[![Build Status](https://travis-ci.org/DJTB/pluralize-word.svg?branch=master)](https://travis-ci.org/DJTB/pluralize-word.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/DJTB/pluralize-word/badge.svg?branch=master)](https://coveralls.io/github/DJTB/pluralize-word?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Super simple pluralizing, with optional schema for manually handling irregular words.  
Basically the same as writing `` `${amount} ${amount !== 1 ? 'words' : 'word'}` `` just cleaner when used a lot.

```ts
import pluralizeWord from 'pluralize-word';

pluralizeWord('dog', 2);
//=> '2 dogs'
```

## API

### pluralizeWord(subject, amount, options?)

#### subject

Type: `string|string[]`

Subject in the singular, or a schema array of ['singular', 'plural']

#### amount

Type: `number`

The amount of subjects

#### options

Type: `object`

Additional flags `{ excludeCount }`

#### options.excludeCount

Type: `boolean`

Return only the modified subject without a leading count
