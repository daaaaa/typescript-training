module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        "react-app",
        "react-app/jest",
        'xo',
        'xo-typescript/space'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    "rules": {
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ]
    },
    'ignorePatterns': ['.eslintrc.js', 'data.js']
};
