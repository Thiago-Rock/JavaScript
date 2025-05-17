/*
1) Fazer um programa JAVASCRIPT que imprime na tela a frase “Olá pessoal” em vermelho.

document.write("<h1>Olá pessoal!</h1> ") //A parte de estilização foi feita no CSS na tag do <h1>

2) Fazer um programa JAVASCRIPT que imprime uma tabela html com 1 linha e 2 colunas.

document.write("<table border = 2><tr><td>1</td><td>2</td></tr></table>")

// 3) Implemente um programa usando laço (for) que cria uma tabela com 20 linhas e 1 coluna. 
// Cada linha da tabela deve conter a palavra ”Aprendendo Javascript”
// OBSERVAÇÃO: usar o comando document.write

document.writeln("<table border = 2>")
for(let i = 0; i < 20; i++){
    document.write("<tr><td >Apredendo JavaScript</td></tr>")

}
document.write("</table>")

// 4) Implemente um programa usando laço (for) que cria uma tabela com 20 linhas e 2 coluna. 
// Cada linha da tabela deve conter o número da linha , iniciando de 1 na primeira coluna e na 
// segunda coluna a fase  ”Aprendendo Javascript”
// OBSERVAÇÃO: usar o comando document.write

document.writeln("<table border = 2>")
let j = 1;
for(let i = 0; i < 20; i++){
    document.write("<tr><td>"+j+"</td><td >Apredendo JavaScript</td></tr>")
    j++;

}

// 5)  Implemente  um  programa  usando  laço  (while)  que  imprime  uma  numeração  que  é 
// incrementada de 2 em 2 seguido de “Aprendendo Javascript”. Essa sequência deverá 
// ser impressa 100 vezes. O primeiro número a ser impresso deverá ser o número 2. Exemplo:
// 2 – Aprendendo Javascript
// 4 – Aprendendo Javascript
// 6 – Aprendendo Javascript
// …
// 200 – Aprendendo Javascript

document.write("</table>")
let i = 2;
while(i <= 200){
    document.writeln(i+" - Apredendo JavaScript</br>")
    i += 2;
    
}

// 6) Implemente um programa usando laço (for) que imprime de forma alternada as palavras 
// “Aprendendo” e “Javascript” 100 vezes alternando as cores entre vermelho e proto. 
// (Use o operador mod %)
// 1 – Aprendendo
// 2 – Javascript
// 3 – Aprendendo
// …

let a = '';
for(let i = 1; i <= 100; i++){
    if(i % 2 == 1){
        document.writeln('<span>');
        document.writeln(`${i} - Aprendendo</br>`);
        document.writeln('</span>');
    }else{
        document.writeln(i+' - JavaScript</br>');
    }
}

// 7) Implemente um programa usando laço (do while) que imprime um triangulo da seguinte forma:
// X
// X  X
// X  X  X
// X  X  X  X
// X  X  X  X  X
// X  X  X  X  X  X

let linha = 0;
let aux = 'x';
do {
    document.writeln(aux+"</br>");
    aux = aux + 'x';
    linha++;
} while (linha < 6);

// 8) Implemente um programa usando laço (do while) que imprime um triangulo da seguinte forma:
// X  X  X  X  X  X 
// X  X  X  X  X
// X  X  X  X
// X  X  X
// X  X
// X
let linha = 0;
let j = 6;
let aux = '';
do {
    do {
        
    aux = aux + 'x';
    j--;
    } while (j > linha);
    document.writeln(aux+"</br>");
    aux='';
    j = 6;
    linha++;
} while (linha < 6);

// 9 ) Implemente um programa usando laço (for) que imprime um triangulo da seguinte forma: 

// X
// X  X
// X  X  X
// X  X  X  X
// X  X  X  X  X
// X  X  X  X  X  X 
// X  X  X  X  X
// X  X  X  X
// X  X  X
// X  X
// X

let aux = 'x';
for(let i = 0; i < 6; i++){
    document.writeln(aux+'</br>');
    aux+='x';
}
aux = '';
for(i = 0; i < 5; i++){
    for(let j = 5; j > i; j--){
        aux+='x';
    }
    document.writeln(aux+'</br>');
    aux = '';
    
}


//10) O que será impresso na tela do navegador?

let x = "Aprenda Javascript - head"; 
document.writeln(x.length);
document.writeln("<br>");
document.writeln(x.charAt(1) ); 
document.writeln("<br>");
document.writeln(x.indexOf("o") ); //PROCURA O INDÍCIE DA LETRA (o)
document.writeln("<br>");
document.writeln(x.lastIndexOf("o") ); //PROCURA O ÚLTIMO INDÍCIE DA LETRA (o)
document.writeln("<br>");
document.writeln(x.substring(8,12) );

// (25) quebrar a linha
// (A) quebrar a linha (ERREI! ESQUECI QUE O INDÍCIE DA ESTRING COMEÇA NO ZERO PORTANTO APARECE O (p))
// (null) quebrar a linha (ERREI! ACHEI QUE QUANDO NÃO ENCONTRAVA RETORNAVA NULL, MAS É -1 QUE RETORNA)
// (null) quebrar a linha (ERREI! ACHEI QUE QUANDO NÃO ENCONTRAVA RETORNAVA NULL, MAS É -1 QUE RETORNA)
// (Java)

*/