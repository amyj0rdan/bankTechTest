module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true
    },
    "plugins": ["jasmine"],
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};
