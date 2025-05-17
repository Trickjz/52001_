const antlr4 = require('antlr4');
const RegExpLexer = require('./generated/RegExpLexer').RegExpLexer;
const RegExpParser = require('./generated/RegExpParser').RegExpParser;
const CustomRegExpVisitor = require('./CustomRegExpVisitor');

const fs = require('fs');

// Recibe archivo de entrada como argumento
const input = fs.readFileSync(process.argv[2]).toString();

const chars = new antlr4.InputStream(input);
const lexer = new RegExpLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RegExpParser(tokens);
parser.buildParseTrees = true;

const tree = parser.prog(); // punto de inicio de la gramática
const visitor = new CustomRegExpVisitor();

const result = visitor.visit(tree);
console.log("Resultado:", result);
