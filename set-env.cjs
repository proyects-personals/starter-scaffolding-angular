const fs = require('fs');

const envConfig = `
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL || ''}',
  githubToken: '${process.env.GITHUB_TOKEN || ''}'
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfig);