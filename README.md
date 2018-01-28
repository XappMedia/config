# config

## Installation

```sh
npm install --save-dev @xapp/config
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

### tslint.json

```json
{
    "extends": [
        "@xapp/config/tslint"
    ],
    "rules": {}
}
```

### prettier.config.js

```javascript
module.exports = require("@xapp/config/prettier.config");
```
