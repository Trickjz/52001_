grammar Metadata;

metadata: campo* EOF;

campo: nombreCampo ':' valorCampo ';';

nombreCampo:
      'nombre'
    | 'tipo'
    | 'tamaño'
    | 'creado'
    | 'modificado'
    | 'autor'
    | 'descripcion'
    | 'etiquetas'
    ;

valorCampo:
      texto
    | numero
    | fecha
    | listaTextos
    ;

texto: TEXTO;

numero: NUMERO;

fecha: FECHA;

listaTextos: '[' texto (',' texto)* ']';

TEXTO: (LETRA | DIGITO | '_' | '-' | '.' | ' ')+;
NUMERO: DIGITO+;

fragment DIGITO: [0-9];
fragment LETRA: [a-zA-Z];

FECHA: DIGITO DIGITO DIGITO DIGITO '-' DIGITO DIGITO '-' DIGITO DIGITO
     ( ' ' DIGITO DIGITO ':' DIGITO DIGITO (':' DIGITO DIGITO)? )?;

WS: [ \t\r\n]+ -> skip;

