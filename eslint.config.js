const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            // Quality rules (warn level for gradual adoption)
            "complexity": "warn",
            "default-case": "warn",
            "eqeqeq": ["warn", "always", { null: "ignore" }],

            // Console logging - allow info, warn, error (matches stentor-core)
            "no-console": ["warn", { allow: ["info", "warn", "error"] }],

            // Rules that are OFF across all stentor projects
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-member-accessibility": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/no-non-null-assertion": "off",

            // Other rules turned off for compatibility
            "no-empty": "off",
            "prefer-spread": "off"
        }
    },
    {
        // Test file overrides (matches stentor-core pattern)
        files: ["**/*.test.ts", "**/*.spec.ts"],
        rules: {
            "@typescript-eslint/ban-ts-comment": "off"
        }
    }
);
