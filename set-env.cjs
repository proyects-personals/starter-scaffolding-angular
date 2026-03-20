const fs = require('fs');

console.log('🔹 process.env.APIURL:', process.env.APIURL);
console.log('🔹 process.env.GITHUB_TOKEN:', process.env.GITHUB_TOKEN);

const envConfig = `
export const environment = {
  production: true,
  apiUrl: '${process.env.APIURL || ''}',
  githubToken: '${process.env.GITHUB_TOKEN || ''}'
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfig);
console.log('✅ environment.prod.ts generado');