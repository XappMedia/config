# config

## Installation

```sh
npm install --save-dev @xapp/config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript prettier
```

## Usage

### tsconfig.json

```json
{
    "extends": "./node_modules/@xapp/config/tsconfig.json",
    "include": [
        "./src/**/*",
        "./typings/**/*.d.ts",
        "./test/**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### eslint.config.js

```javascript
const xappConfig = require("@xapp/config/eslint.config");

module.exports = [
    ...xappConfig,
    // Add your custom rules here
];
```

To override a rule locally, add a configuration object with the rule:
```javascript
const xappConfig = require("@xapp/config/eslint.config");

module.exports = [
    ...xappConfig,
    {
        rules: {
            "@typescript-eslint/explicit-member-accessibility": "error"
        }
    }
];
```

### prettier.config.js

```javascript
module.exports = require("@xapp/config/prettier.config");
```
