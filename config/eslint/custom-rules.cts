module.exports = {
  'react-refresh/only-export-components': 0,
  'import/no-unresolved': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'off',
  'react/jsx-pascal-case': ['warn', { allowAllCaps: true, ignore: [] }],
  '@typescript-eslint/no-explicit-any': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  camelcase: 'error',
  'spaced-comment': 'error',
  quotes: ['error', 'single'],
  'no-duplicate-imports': 'error',
  'max-len': [
    'error',
    {
      code: 250,
    },
  ],
  'no-console': 'error',
  'react/self-closing-comp': ['error', { component: true, html: true }],
  '@typescript-eslint/no-extraneous-class': 'off',
  semi: 'off',
  '@typescript-eslint/semi': ['error', 'always'],
  'import/default': 'off',
  'import/no-useless-path-segments': 'error',
  'import/no-duplicates': 'error',
  'import/no-empty-named-blocks': 'error',
  '@typescript-eslint/import/prefer-default-export': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
  ],
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.js', 'ts', '.jsx', '.tsx'],
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'never',
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
        {
          group: 'internal',
          position: 'after',
          pattern: 'pages/**',
        },
        {
          group: 'internal',
          position: 'after',
          pattern: 'widgets/**',
        },
        {
          group: 'internal',
          position: 'after',
          pattern: 'features/**',
        },
        {
          group: 'internal',
          position: 'after',
          pattern: 'entities/**',
        },
        {
          group: 'internal',
          position: 'after',
          pattern: 'shared/**',
        },
      ],
      pathGroupsExcludedImportTypes: ['react', 'builtin'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'boundaries/entry-point': [
    2,
    {
      default: 'disallow',
      rules: [
        {
          target: [
            [
              'shared',
              {
                segment: 'lib',
              },
            ],
          ],
          allow: '*/index.ts',
        },
        {
          target: [
            [
              'shared',
              {
                segment: 'lib',
              },
            ],
          ],
          allow: '*.(ts|tsx)',
        },
        {
          target: [
            [
              'shared',
              {
                segment: 'constants',
              },
            ],
          ],
          allow: 'index.ts',
        },
        {
          target: [
            [
              'shared',
              {
                segment: 'ui', // ("ui"|"constants")
              },
            ],
          ],
          allow: '**',
        },
        {
          target: [
            [
              'shared',
              {
                segment: 'assets', // ("ui"|"constants")
              },
            ],
          ],
          allow: 'index.ts',
        },
        {
          target: [
            [
              'shared',
              {
                segment: 'api', // ("ui"|"constants")
              },
            ],
          ],
          allow: 'index.ts',
        },
        {
          target: ['app', 'pages', 'widgets', 'features', 'entities'],
          allow: 'index.(ts|tsx)',
        },
      ],
    },
  ],
  'boundaries/element-types': [
    2,
    {
      default: 'allow',
      message: '${file.type} is not allowed to import (${dependency.type})',
      rules: [
        {
          from: ['shared'],
          disallow: ['app', 'pages', 'widgets', 'features', 'entities'],
          message: 'Shared module must not import upper layers (${dependency.type})',
        },
        {
          from: ['entities'],
          message: 'Entity must not import upper layers (${dependency.type})',
          disallow: ['app', 'pages', 'widgets', 'features'],
        },
        {
          from: ['entities'],
          message: 'Entity must not import other entity',
          disallow: [
            [
              'entities',
              {
                entity: '!${entity}',
              },
            ],
          ],
        },
        {
          from: ['features'],
          message: 'Feature must not import upper layers (${dependency.type})',
          disallow: ['app', 'pages', 'widgets'],
        },
        {
          from: ['features'],
          message: 'Feature must not import other feature',
          disallow: [
            [
              'features',
              {
                feature: '!${feature}',
              },
            ],
          ],
        },
        {
          from: ['widgets'],
          message: 'Feature must not import upper layers (${dependency.type})',
          disallow: ['app', 'pages'],
        },
        {
          from: ['widgets'],
          message: 'Widget must not import other widget',
          disallow: [
            [
              'widgets',
              {
                widget: '!${widget}',
              },
            ],
          ],
        },
        {
          from: ['pages'],
          message: 'Page must not import upper layers (${dependency.type})',
          disallow: ['app'],
        },
        {
          from: ['pages'],
          message: 'Page must not import other page',
          disallow: [
            [
              'pages',
              {
                page: '!${page}',
              },
            ],
          ],
        },
      ],
    },
  ],
  '@typescript-eslint/prefer-nullish-coalescing': 0,
  '@typescript-eslint/strict-boolean-expressions': 0,
  '@typescript-eslint/no-useless-constructor': 0,
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-new-symbol': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'react/no-children-prop': 'off',
};
