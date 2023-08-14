# eslint-plugin-vitest-sample

## 概要

- [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest)を使用したサンプルプロジェクトです。
- vitest用のeslintルールを実行します。

## 動作環境

- Node.js - 18.x
- Yarn - 1.22.x

## ライブラリ

- Vitest - 0.34.x
- ESLint - 8.47.x
- eslint-plugin-vitest - 0.2.x

## 動作確認

```bash
# パッケージインストール
yarn

# eslint実行
yarn lint
```

## 実行結果

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
