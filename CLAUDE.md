# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is `@xapp/config`, a shared configuration package that provides extendable TypeScript, ESLint, and Prettier configurations for XAPPmedia projects.

## Commands

```bash
npm run lint      # Run ESLint on src/ and test/ directories
npm run prettier  # Format TypeScript files with Prettier
npm run release   # Create a new version release using standard-version
```

## Architecture

This is a configuration-only package with no runtime code. The repository provides three configuration files meant to be extended by consuming projects:

- **tsconfig.json** - Base TypeScript compiler options (ES6 target, CommonJS modules, strict type checking)
- **eslint.config.js** - Flat config extending `@eslint/js`, `typescript-eslint`, and `eslint-config-prettier`
- **prettier.config.js** - 4-space tabs, 120 character line width, TypeScript parser

The `src/` directory contains sample TypeScript interfaces used only for testing the configurations.

## ESLint Rules of Note

**Quality rules (warn level for gradual adoption):**
- `complexity` - Warns on high cyclomatic complexity
- `default-case` - Switch statements should have a default case
- `eqeqeq` - Use === and !== (null checks allowed)
- `no-console` - Warns on console.log, allows info/warn/error

**Rules turned OFF for compatibility with stentor projects:**
- `@typescript-eslint/no-explicit-any`
- `@typescript-eslint/explicit-function-return-type`
- `@typescript-eslint/explicit-member-accessibility`
- `@typescript-eslint/no-unused-vars`
- `@typescript-eslint/ban-types`

Test files (`*.test.ts`, `*.spec.ts`) have additional relaxed rules.

## Prettier Settings

- Tab width: 4 spaces
- Print width: 120 characters
