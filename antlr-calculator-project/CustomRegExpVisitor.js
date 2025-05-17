const RegExpVisitor = require('./generated/RegExpVisitor').RegExpVisitor;

class CustomRegExpVisitor extends RegExpVisitor {
    visitProg(ctx) {
        console.log("Expresión válida.");
        return null;
    }

    // Podrías expandir más funciones como visitUnion, visitGroup, etc. si quisieras.
}

module.exports = CustomRegExpVisitor;
