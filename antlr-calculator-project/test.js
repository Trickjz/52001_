const fs = require('fs');
const { execSync } = require('child_process');

const inputs = [
  'input/ok1.txt',
  'input/ok2.txt',
  'input/err1.txt',
  'input/err2.txt'
];

for (const file of inputs) {
  console.log(`\n===== Analizando ${file} =====`);
  try {
    const result = execSync(`node index.js ${file}`);
    console.log(result.toString());
  } catch (error) {
    console.error(">> Error:", error.message);
  }
}
