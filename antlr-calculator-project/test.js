const { execSync } = require('child_process');
const inputs = ['input/ok1.txt', 'input/ok2.txt', 'input/err1.txt', 'input/err2.txt'];

inputs.forEach((file) => {
  console.log(`\n--- Ejecutando ${file} ---`);
  try {
    const result = execSync(`node index.js ${file}`);
    console.log(result.toString());
  } catch (error) {
    console.error(`Error al procesar ${file}`);
    console.error(error.stdout.toString());
  }
}}
