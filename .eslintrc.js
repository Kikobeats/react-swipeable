module.exports = {
    "globals": {
        "jest": false,
        "describe": false,
        "it": false,
        "expect": false
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/prefer-es6-class": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-boolean-value": "off",
        "no-mixed-operators": "off",
        "no-unused-expressions": ["error", {"allowShortCircuit": true}]
    }
};