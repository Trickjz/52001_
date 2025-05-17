# Analizador de Expresiones Regulares con ANTLR4 + JavaScript

Este proyecto implementa un analizador sintáctico para **expresiones regulares simples**, desarrollado con **ANTLR4** y ejecutado con **Node.js**.

## 📚 Descripción

La gramática utilizada reconoce expresiones como:
- `a`
- `a*`
- `a|b`
- `(a|b)*abb`

Y detecta errores como:
- `a**`
- `(|a)`

## 📦 Requisitos

- Node.js (v16 o superior)
- Java JDK (8 o superior)
- ANTLR4 (versión 4.13.2)

## 🛠️ Configuración y ejecución

1. Generar el parser con ANTLR4:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated RegExp.g4
