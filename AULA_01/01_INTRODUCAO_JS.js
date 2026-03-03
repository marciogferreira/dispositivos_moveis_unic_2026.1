// 1. INTRODUCAO
// 2. SINTAXE
// 3. TIPOS DE DADOS
// 4. VARIAVEIS
// 5. OPERADORES
// 6. ESTRUTURA CONDICIONAL (IF..ELSE E SWITCH)
// 7. ARRAYS
// 8. FUNCOES
// 9. ESTRUTURA DE REPETICAO
//  - WHILE
//  - FOR
//  - DO..WHILE
//  - FOREACH, MAP, FILTER E REDUCE
// 10. PROGRAMACAO ORIENTADA A OBJETOS - POO
//  - CLASSES, METODOS E ATRIBUTOS
//  - OBJETOS
//  - HERANCA
//  - POLIMOFISMO
//  - ABSTRACT
//  - ESCAPSULAMENTO



//  ---------------

// VARIAVEIS::
// EM JS TEMOS 3 FORMAS DE DECLARAR VARIAVEL

// 1 FORMA: PODE REDECLARAR E PODE TROCAR O VALOR
var nome_variavel = "valor"
var nome_variavel = "valor2"

// 2 FORMA: NAO PODE REDECLARAR E PODE TROCAR O VALOR
let nome_variavel = "valor"
nome_valor = "outro_valor"

// 3 FORMA: NAO PODE REDECLARAR E NAO PODE TROCAR O VALOR
const nome_variavel = "valor"


// TIPOS DE DADOS::
let texto = "texto" // string
let numero_inteiro = 10 // number
let numero_decimal = 10.5 // number
let logico = true // boolean
let indefinido // undefined
let nulo = null // null
let simbolo = Symbol("simbolo") // symbol
let objeto = { nome: "objeto" } // object
let array = [1, 2, 3] // array
let funcao = function() { console.log("funcao") } // function


// OPERADORES ARITMETICOS, COMPARATIVOS E ATRIBUICOES

const soma = 1 + 1 // adicao
const subtracao = 1 - 1 // subtracao
const multiplicacao = 2 * 2 // multiplicacao
const divisao = 4 / 2 // divisao
const modulo = 5 % 2 // modulo - resto da divisao
const potencia = 2 ** 3 // potencia

const igual = 1 == "1" // comparacao de valor
const estritamente_igual = 1 === "1" // comparacao de valor e tipo
const diferente = 1 != "1" // comparacao de valor
const estritamente_diferente = 1 !== "1" // comparacao de valor e tipo
const maior_que = 2 > 1 // comparacao de valor
const menor_que = 1 < 2 // comparacao de valor
const maior_ou_igual = 2 >= 2 // comparacao de valor
const menor_ou_igual = 1 <= 2 // comparacao de valor


let atribuicao = 1 // atribuicao

atribuicao += 1 // atribuicao de adicao
atribuicao -= 1 // atribuicao de subtracao
atribuicao *= 2 // atribuicao de multiplicacao
atribuicao /= 2 // atribuicao de divisao
atribuicao %= 2 // atribuicao de modulo
atribuicao **= 2 // atribuicao de potencia



let incremento = 1
incremento++ // incremento - pos fixado
++incremento // incremento - pre fixado

let decremento = 1
decremento-- // decremento - pos fixado
--decremento // decremento - pre fixado



// ESTRUTURA CONDICIONAL::
let idade = 18

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}
// 1. CRIE UM PROGRAMA QUE VERIFIQUE SE UM NUMERO E PAR OU IMPAR
// UTILIZE O MOD % PARA VER SE O NUMERO E DIVISIVEL POR 2
// E UTILIZE O IF..ELSE PARA IMPRIMIR SE O NUMERO E PAR OU IMPAR



// 2. CRIE UM PROGRAMA QUE RECEBA O SALARIO DE UM FUNCIONARIO E VERIFIQUE SE ELE TEM DIREITO A UM BONUS DE 10% SE O SALARIO FOR MAIOR QUE 5000
// UTILIZE O IF..ELSE PARA VER SE O SALARIO E MAIOR QUE 5000
// SE FOR MAIOR QUE 5000, CALCULE O BONUS DE 10% E IMPRIMA O VALOR DO BONUS
// SE FOR MENOR OU IGUAL A 5000, IMPRIMA QUE O FUNCIONARIO NAO TEM DIREITO AO BONUS







