const antlr4 = require('antlr4');
const fs = require('fs');
const MetadataLexer = require('./generated/MetadataLexer').MetadataLexer;
const MetadataParser = require('./generated/MetadataParser').MetadataParser;
const CustomMetadataVisitor = require('./CustomMetadataVisitor');

const input = fs.readFileSync(process.argv[2], 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new MetadataLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MetadataParser(tokens);

parser.buildParseTrees = true;
const tree = parser.metadata();

const visitor = new CustomMetadataVisitor();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(visitor, tree);

// Mostrar árbol sintáctico
console.log('Árbol interpretado:');
console.log(visitor.getMetadata());

// Mostrar traducción a JavaScript
console.log('\nTraducción a JavaScript:');
console.log(visitor.toJavaScript());

