const MetadataVisitor = require('./generated/MetadataVisitor').MetadataVisitor;

class CustomMetadataVisitor extends MetadataVisitor {
  constructor() {
    super();
    this.metadata = {};
  }

  visitCampo(ctx) {
    const key = ctx.nombreCampo().getText();
    const valueCtx = ctx.valorCampo();

    let value = null;

    if (valueCtx.texto()) {
      value = valueCtx.getText();
    } else if (valueCtx.numero()) {
      value = parseInt(valueCtx.getText(), 10);
    } else if (valueCtx.fecha()) {
      value = valueCtx.getText();
    } else if (valueCtx.listaTextos()) {
      value = valueCtx.getText();
    }

    this.metadata[key] = value;
    return null;
  }

  getMetadata() {
    return this.metadata;
  }

  toJavaScript() {
    const lines = [];
    lines.push('const archivoMetadata = `');
    for (const [key, value] of Object.entries(this.metadata)) {
      lines.push(`${key}: ${value};`);
    }
    lines.push('`;');
    return lines.join('\n');
  }
}

module.exports = CustomMetadataVisitor;
