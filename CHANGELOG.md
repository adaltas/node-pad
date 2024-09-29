# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.3.0](https://github.com/adaltas/node-pad/compare/v3.2.0...v3.3.0) (2024-09-29)

### Features

- esm convertion ([33911c9](https://github.com/adaltas/node-pad/commit/33911c907049348e3ba842ed709753bc02b0ee51))
- js to ts concersion ([b4a90da](https://github.com/adaltas/node-pad/commit/b4a90da8481445321833597e54fd69e9466ac519))

### Bug Fixes

- add ts allowSyntheticDefaultImports ([a53517e](https://github.com/adaltas/node-pad/commit/a53517e4847b65b9906c1dd2ac573f6b0015c922))

# Changelog

## Trunk

- package: update author url
- ts: api tests
- src: rewrite in js

## Version 3.2.0

- package: fix rollup dev dependencies

## Version 3.1.0

- package: declare "dist" in files filed

## Version 3.0.1

- rollup: use commonjs and node-resolve plugins
- ts: move definition file into dist/pad.d.ts

## Version 3.0.0

Backward incompatibility:

- bundles: exported modules are no longer in lib but in dist
- api: remove the colors module, use directly the option instead

New feature:

- dist: generate cjs, esm and umd bundles

## Version 2.3.0

- project: use files instead of npm ignore
- project: ignore lock file

## Version 2.2.3

- wcwidth: pass configuration

## Version 2.2.2

- babel: fix es5 generation and upgrade to version 7

## Version 2.2.1

- readme: es5

## Version 2.2.0

New feature:

- package: generate es5 modules

Cleanup

- package: latest dependencies
- package: exclude package-lock file

## Version 2.1.0

- package: add TypeScript definition file

## Version 2.0.3

- package: declare coffee as dev dependency

## Version 2.0.2

- package: release commands

## v2.0.1

src: js backward compatibility with coffee 2

## v2.0.0

- package: upgrade to CoffeeScript 2

## v1.2.1

- package revers to CoffeeScript 1

## v1.2.0

- src: handle characters using multi columns for display
- package: new changelog file
- package: upgrade to CoffeeScript 2

## V1.1.0

- src: use string.repeat instead of loop

## v1.0.3

- readme: multiple updates
- package: set homepage
- package: move to adaltas github owner

## v1.0.2

- package: doc simplification

## v1.0.1

- src: get rid of regex capture groups
- package: clean up with fixpack

## v1.0.0

- package: dependencies with caret
- src: size < str.length and new option strip fix #5
