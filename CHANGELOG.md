# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/XAPPmedia/config/compare/v0.2.3...v0.3.0) (2026-02-23)


### ⚠ BREAKING CHANGES

* TSLint has been replaced with ESLint

- Replace tslint.json with eslint.config.js (flat config format)
- Update all dependencies to latest versions:
  - typescript: 2.x → 5.x
  - prettier: 1.x → 3.x
  - eslint: 9.x (new)
  - @typescript-eslint/*: 8.x (new)
- Remove tslint and tslint-config-prettier dependencies
- Add eslint-config-prettier for Prettier integration
- Align ESLint rules with stentor-core and stentor-client projects
- Add test file overrides for *.test.ts and *.spec.ts
- Update README.md with new usage instructions
- Add CLAUDE.md for AI assistant guidance

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>

* fix: move ESLint config dependencies to dependencies

- Move @eslint/js and typescript-eslint to dependencies so consuming
  projects can import the shared config without installing them separately
- Simplify peer dependencies to just eslint, prettier, typescript
- Remove hardcoded parser from prettier config (auto-detect by extension)
- Update README with simplified installation

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>

### Features

* migrate from TSLint to ESLint ([#28](https://github.com/XAPPmedia/config/issues/28)) ([bdeeb34](https://github.com/XAPPmedia/config/commit/bdeeb34e50f975f17ee8be9435f95c056bd06a35))

<a name="0.2.3"></a>
## [0.2.3](https://github.com/XAPPmedia/config/compare/v0.2.2...v0.2.3) (2018-09-14)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/XAPPmedia/config/compare/v0.2.1...v0.2.2) (2018-09-14)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/XAPPmedia/config/compare/v0.2.0...v0.2.1) (2018-02-02)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/XAPPmedia/config/compare/v0.1.0...v0.2.0) (2018-01-31)


### Features

* Removing Style Rules ([#5](https://github.com/XAPPmedia/config/issues/5)) ([dfa21de](https://github.com/XAPPmedia/config/commit/dfa21de))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/XAPPmedia/config/compare/v0.0.3...v0.1.0) (2018-01-30)


### Features

* updating line length ([#4](https://github.com/XAPPmedia/config/issues/4)) ([680dd8f](https://github.com/XAPPmedia/config/commit/680dd8f))



<a name="0.0.3"></a>
## [0.0.3](https://github.com/XAPPmedia/config/compare/v0.0.2...v0.0.3) (2018-01-28)



<a name="0.0.2"></a>
## 0.0.2 (2018-01-28)



<a name="0.0.1"></a>
## 0.0.1 (2018-01-28)
