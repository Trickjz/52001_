# Analizador de Metadatos con ANTLR4 y JavaScript

**Autora:** Jazmín Nirvana Gudiño Estrada  
**Legajo:** 52001  
**Materia:** Construcción de Analizadores  
**Año:** 2025

---

## Descripción

Este proyecto implementa un analizador léxico y sintáctico para un lenguaje de metadatos. Se utilizó ANTLR4 para generar el lexer, parser y visitor, y se simula la ejecución en entorno Node.js.

El analizador reconoce campos como:

- `nombre`, `tipo`, `tamaño`
- `creado`, `modificado`
- `autor`, `descripcion`, `etiquetas`

Ejemplo de entrada válida:

```txt
nombre: archivo.pdf;
tipo: pdf;
tamaño: 102400;
etiquetas: [documento, ejemplo];
Estructura del Proyecto
.
├── antlr/
│   ├── comando_usado.txt
│   ├── estructura_generada.txt
│   ├── explicacion_lexer.txt
│   └── lexico.txt
├── simulacion/
│   ├── comandos_antlr.txt
│   ├── estructura_generada.txt
│   ├── ejecucion_ok1.txt
│   ├── ejecucion_err1.txt
│   ├── tabla_lexemas_tokens.txt
│   ├── arbol_sintactico_ok1.txt
│   └── arbol_json_ok1.txt
├── input/
│   ├── ok1.txt
│   ├── ok2.txt
│   ├── err1.txt
│   └── err2.txt
├── generated/
│   ├── MetadataLexer.js
│   ├── MetadataParser.js
│   ├── MetadataVisitor.js
│   ├── Metadata.tokens
│   └── MetadataLexer.tokens
├── .vscode/
│   ├── launch.json
│   └── settings.json
├── CustomMetadataVisitor.js
├── Metadata.g4
├── index.js
├── interprete.js
├── test.js
├── ejercicio.txt
├── package.json
├── package-lock.json
└── README.md

Instrucciones (simuladas)

Generación del parser:
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated Metadata.g4
Ejecución del analizador:
node index.js input/ok1.txt
Interpretación (opcional):
node interprete.js

Simulación
Todos los archivos generados y los resultados fueron simulados según la consigna, y se encuentran organizados en sus respectivas carpetas (antlr/, simulacion/, generated/).

Créditos
Trabajo realizado por:
Jazmín Nirvana Gudiño Estrada
Legajo: 52001
