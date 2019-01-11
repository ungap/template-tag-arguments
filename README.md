# Template Tag Arguments

[![Build Status](https://travis-ci.com/ungap/template-tag-arguments.svg?branch=master)](https://travis-ci.com/ungap/template-tag-arguments) [![Coverage Status](https://coveralls.io/repos/github/ungap/template-tag-arguments/badge.svg?branch=master)](https://coveralls.io/github/ungap/template-tag-arguments?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/template-tag-arguments.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)

Normalizes tagged arguments granting a unique template through the [@ungap/template-literal](https://github.com/ungap/template-literal) module.

```js
import tta from '@ungap/template-tag-arguments';

const tag = (...args) => {
  const [template, ...interpolations] = tta(...args);
  // template is now unique in TypeScript, old Firefox, and others
  return template;
};

tag(1) === tag(2); // true as specified by ECMAScript standard

function test(value) {
  return tag`a${value}b`;
}
```

#### How to include

  * CDN as global utility via https://unpkg.com/@ungap/template-tag-arguments
  * CDN as ESM module via `import tta from 'https://unpkg.com/@ungap/template-tag-arguments?module'`
  * ESM via `import tta from '@ungap/template-tag-arguments'`
  * CJS via `const tta = require('@ungap/template-tag-arguments')`
