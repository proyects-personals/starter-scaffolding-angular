// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      /* =====================================================
       * ELIMINAR CUALQUIER RASTRO DE 'ANY' (Nativo de TS-ESLint)
       * ===================================================== */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/no-non-null-assertion': 'error',

      /* =====================================================
       * TIPADO ESTRICTO (Hexagonal Ready)
       * ===================================================== */
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: false }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',

      /* =====================================================
       * ORDEN DE IMPORTS (Usando regla nativa de TS)
       * Nota: Aunque no es tan potente como el plugin 'import',
       * esta regla ayuda a mantener la limpieza básica.
       * ===================================================== */
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true, // Para evitar conflictos con el auto-import del IDE
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      /* =====================================================
       * REGLAS DE LIMPIEZA
       * ===================================================== */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error', 
        { ignore: [0, 1], ignoreArrayIndexes: true, enforceConst: true }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn', 
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],

      /* =====================================================
       * ANGULAR CORE
       * ===================================================== */
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
    },
  }
);