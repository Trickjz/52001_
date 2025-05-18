const RegExpVisitor = require('./generated/RegExpVisitor').RegExpVisitor;

class CustomRegExpVisitor extends RegExpVisitor {
    visitProg(ctx) {
        return this.visit(ctx.expr());
    }

    visitUnion(ctx) {
        return {
            tipo: "Union",
            izquierda: this.visit(ctx.expr()),
            derecha: this.visit(ctx.concat())
        };
    }

    visitJustConcat(ctx) {
        return this.visit(ctx.concat());
    }

    visitConcatExpr(ctx) {
        return {
            tipo: "Concat",
            izquierda: this.visit(ctx.concat()),
            derecha: this.visit(ctx.repeat())
        };
    }

    visitJustRepeat(ctx) {
        return this.visit(ctx.repeat());
    }

    visitKleene(ctx) {
        return {
            tipo: "Kleene",
            valor: this.visit(ctx.atom())
        };
    }

    visitNoRepeat(ctx) {
        return this.visit(ctx.atom());
    }

    visitSingleChar(ctx) {
        return {
            tipo: "Char",
            valor: ctx.getText()
        };
    }

    visitGroup(ctx) {
        return {
            tipo: "Group",
            contenido: this.visit(ctx.expr())
        };
    }
}

module.exports = CustomRegExpVisitor; 
