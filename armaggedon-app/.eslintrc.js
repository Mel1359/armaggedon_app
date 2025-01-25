const globals = require("globals");

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    globals: {
        ...globals.browser,
    },
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
    },
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
    ],
};
