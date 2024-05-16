import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'

export default withNuxt([

  ...pluginVue.configs['flat/recommended'],

  {

    rules: {
      // --- ESLint
      'no-param-reassign': 'off',
      'eqeqeq': ['error', 'always'],
      'dot-notation': 'error',
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { 'beforeColon': false }],
      'max-len': ['error', { 'code': 120, 'ignoreStrings': true }],
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
      'object-curly-spacing': ['error', 'always'],
      'space-unary-ops': 'error',
      'template-curly-spacing': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'quotes': ['error', 'single'],
      'no-trailing-spaces': 'error',
      // 'no-undef': 'error',
      'no-unused-vars': 'error',
      'camelcase': ['error', { 'properties': 'never', ignoreDestructuring: true }],
      'no-underscore-dangle': 'error',
      // 'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
      'semi': ['error', 'never'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'try' },
        { blankLine: 'always', prev: 'try', next: '*' },
      ],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',

      // --- Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/space-unary-ops': 'error',
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/template-curly-spacing': ['error'],
      'vue/no-useless-concat': 'error',
      'vue/prefer-template': 'error',
      'vue/key-spacing': ['error', { 'beforeColon': false }],
      // 'vue/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
      // 'vue/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],
      'vue/max-attributes-per-line': ['error', {
        'singleline': {
          'max': 1,
        },
        'multiline': {
          'max': 1,
        },
      }],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          'singleline': 'never',
          'multiline': 'always',
        },
      ],
      'vue/script-indent': ['error', 2, {
        'baseIndent': 1,
      }],
      'vue/func-call-spacing': ['error', 'never'],
      'vue/array-bracket-newline': 'error',
      'vue/eqeqeq': 'error',
      'vue/dot-notation': 'error',
      'vue/require-name-property': 'error',
      'vue/no-template-target-blank': ['error', { allowReferrer: false }],
      'vue/no-unused-properties': ['warn', {
        'groups': ['props', 'data', 'computed'],
        'deepData': false,
      }],
      'vue/block-tag-newline': ['error', { 'singleline': 'always', 'multiline': 'always', 'maxEmptyLines': 0 }],
      'vue/max-len': ['error', {
        'code': 120,
        'template': 120,
        'tabWidth': 2,
        'comments': 120,
        'ignorePattern': '',
        'ignoreComments': false,
        'ignoreTrailingComments': false,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': false,
        'ignoreRegExpLiterals': false,
        'ignoreHTMLAttributeValues': false,
        'ignoreHTMLTextContents': false,
      }],
      'vue/comma-dangle': ['error', 'always-multiline'],
    },
  }])
