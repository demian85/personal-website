module.exports = {
  "root": true,
  "extends": "airbnb",
  "rules": {
    "no-unused-vars": ["error", { "args": "none" }],
    "no-use-before-define": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "no-console": 0,
    "comma-dangle": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "no-cond-assign": 0,
    "no-plusplus": 0,
    "max-len": ["error", 140],
    "newline-per-chained-call": 0,
    "spaced-comment": 0,
    "no-shadow": [
      "error",
      { "builtinGlobals": false, "hoist": "functions", "allow": ["err", "cb", "callback"] }
    ],
    "no-alert": 0,
    "arrow-body-style": 0,
    "react/no-string-refs": 0,
    "react/no-multi-comp": 0,
    "react/sort-comp": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": ["error", { "ignore": ["children", "dispatch"] }],
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }
    ],
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  },
};
