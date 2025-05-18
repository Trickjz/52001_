const antlr4 = require('antlr4');
const RegExpLexer = require('./generated/RegExpLexer').RegExpLexer;
const RegExpParser = require('./generated/RegExpParser').RegExpParser;
const CustomRegExpVisitor = require('./CustomRegExpVisitor');
const fs = require('fs');

// Recibe el archivo como argumento
const input = fs.readFileSync(process.argv[2]).toString();
console.log(">> Entrada:", input.trim());

const chars = new antlr4.InputStream(input);
const lexer = new RegExpLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RegExpParser(tokens);
parser.buildParseTrees = true;

try {
    const tree = parser.prog();
    const visitor = new CustomRegExpVisitor();
    const result = visitor.visit(tree);

    console.log(">> Árbol (formato JSON):");
    console.log(JSON.stringify(result, null, 2));
    console.log(">> Resultado: expresión válida.");
} catch (error) {
    console.error(">> Error de análisis:", error.message);
}
