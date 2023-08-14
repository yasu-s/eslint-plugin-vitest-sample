# eslint-plugin-vitest-sample

## Overview

- This is a sample project using [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest).
- Run the eslint rule for vitest.

## System Requirements

- Node.js - 18.x
- Yarn - 1.22.x

## Library

- Vitest - 0.34.x
- ESLint - 8.47.x
- eslint-plugin-vitest - 0.2.x

## Usage

```bash
# package install
yarn

# eslint run
yarn lint
```

## Execution result

```bash
$ eslint ./test --ext .js

./test/sample.test.js
  11:3  error  Test is used multiple times in the same describe block  vitest/no-identical-title
  16:3  error  Prefer using it instead of test within describe         vitest/consistent-test-it
  22:1  error  All test cases must be wrapped in a describe block      vitest/require-top-level-describe

✖ 3 problems (3 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
```
