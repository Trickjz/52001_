grammar RegExp;

prog:   expr EOF ;

expr
    : expr '|' concat          # Union
    | concat                   # JustConcat
    ;

concat
    : concat repeat            # ConcatExpr
    | repeat                   # JustRepeat
    ;

repeat
    : atom '*'                 # Kleene
    | atom                     # NoRepeat
    ;

atom
    : ID                       # SingleChar
    | '(' expr ')'             # Group
    ;

ID  : [a-z] ;
WS  : [ \t\r\n]+ -> skip ;
