export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nuevas funcionalidades
        'fix',      // Corrección de errores
        'docs',     // Documentación
        'style',    // Cambios de formato (Prettier, etc.)
        'refactor', // Refactorización de código
        'perf',     // Mejoras de rendimiento
        'test',     // Añadir o arreglar tests
        'build',    // Cambios en el sistema de construcción (Vite, npm)
        'ci',       // Cambios en GitHub Actions / CI
        'chore',    // Tareas rutinarias (actualizar dependencias)
        'revert',   // Revertir un commit anterior
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
  },
};