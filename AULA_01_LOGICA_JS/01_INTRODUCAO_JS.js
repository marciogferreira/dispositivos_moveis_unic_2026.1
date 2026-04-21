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

// DESAFIOS::

// 1. CRIE UM PROGRAMA QUE VERIFIQUE SE UM NUMERO E PAR OU IMPAR
// UTILIZE O MOD % PARA VER SE O NUMERO E DIVISIVEL POR 2
// E UTILIZE O IF..ELSE PARA IMPRIMIR SE O NUMERO E PAR OU IMPAR



// 2. CRIE UM PROGRAMA QUE RECEBA O SALARIO DE UM FUNCIONARIO E VERIFIQUE SE ELE TEM DIREITO A UM BONUS DE 10% SE O SALARIO FOR MAIOR QUE 5000
// UTILIZE O IF..ELSE PARA VER SE O SALARIO E MAIOR QUE 5000
// SE FOR MAIOR QUE 5000, CALCULE O BONUS DE 10% E IMPRIMA O VALOR DO BONUS
// SE FOR MENOR OU IGUAL A 5000, IMPRIMA QUE O FUNCIONARIO NAO TEM DIREITO AO BONUS


// ARRAYS
let array_vazio = [] // array vazio
let array_numeros = [1, 2, 3, 4, 5] // array de numeros
let array_strings = ["a", "b", "c", "d", "e"] // array de strings
let array_misto = [1, "a", true, null, undefined] // array misto

// ACESSANDO ELEMENTOS DO ARRAY
console.log(array_numeros[0]) // 1
console.log(array_strings[1]) // "b"
console.log(array_misto[2]) // true

// ADICIONANDO ELEMENTOS AO ARRAY
array_numeros.push(6) // adiciona o numero 6 ao final do array
array_strings.unshift("z") // adiciona a string "z" ao inicio do array
array_misto.splice(2, 0, "novo_elemento") // adiciona o elemento "novo_elemento" na posicao 2 do array

// REMOVENDO ELEMENTOS DO ARRAY
array_numeros.pop() // remove o ultimo elemento do array
array_strings.shift() // remove o primeiro elemento do array
array_misto.splice(2, 1) // remove o elemento da posicao 2 do array

// PROPRIEDADES E METODOS DO ARRAY
console.log(array_numeros.length) // 5 - quantidade de elementos do array
console.log(array_strings.includes("c")) // true - verifica se o array inclui a string "c"
console.log(array_misto.indexOf(true)) // 2 - retorna a posicao do elemento true no array 

let introducao = "Introdução ao JavaScript"

introducao.indexOf("Intro") // 0 - retorna a posicao da string "JavaScript" na string introducao




