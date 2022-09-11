module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // Uses babel-eslint transforms.
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    '@babel'
  ],
  root: true, // For configuration cascading.
  rules: {
    'react/no-unescaped-entities': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'template-curly-spacing': 'off',
    indent: 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'react/prop-types': 0,
    quotes: [
      'warn',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'jsx-quotes': [
      'warn',
      'prefer-double'
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal'
        ],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  }
}