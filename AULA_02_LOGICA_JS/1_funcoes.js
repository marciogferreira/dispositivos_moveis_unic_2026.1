// FUNCTION SIMPLES - PROCEDIMENTO
function exibirMensagem() {
    console.log("Olá, esta é uma mensagem de função!");
} 

// CHAMANDO A FUNÇÃO
// exibirMensagem(); // Saída: Olá, esta é uma mensagem de função!

// FUNCTION COM PARÂMETROS - PROCEDIMENTO
function saudacao(nome, valor1, valor2) {
    console.log(`Olá, ${nome}! Bem-vinda!`);
    const soma = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é: ${soma}`);
}

// CHAMANDO A FUNÇÃO COM PARÂMETRO
// saudacao("Maria", 10, 12); // Saída: Olá, Maria! Bem-vinda!

// FUNCTION COM RETORNO - FUNÇÃO
function calcularAreaRetangulo(base, altura) {
    const area = base * altura;
    return area; // Retorna o valor da área
}

// CHAMANDO A FUNÇÃO COM RETORNO
const areaRetangulo = calcularAreaRetangulo(5, 3);
// console.log(`A área do retângulo é: ${areaRetangulo}`); // Saída: A área do retângulo é: 15

// FUNCOES DE SETA - ARROW FUNCTION
const calcularAreaRetanguloAF = (base, altura) => base * altura

// CHAMANDO A FUNÇÃO DE SETA
const areaRetanguloAF = calcularAreaRetanguloAF(5, 3); // Saída: A área do retângulo (Arrow Function) é: 15



const alunos = ["Alice", "Bob", "Charlie", "David", "Eve"];
// MAP, FILTER e REDUCE
function lerNome(valor, posicao) {
    console.log(valor, posicao)
}
alunos.map(lerNome)


const professores = [
    "Smith", 
    "Johnson", 
    "Williams", 
    "Brown"
];

const professoresFormatados = 
professores.map((nome, posicao) => {
    return `Prof(a). ${nome}`
})
console.log(professoresFormatados)


const professoresFiltrados = 
professores.filter((nome, posicao) => {
    if(nome !== "Smith") {
        return true
    }
})
console.log(professoresFiltrados)

// professores.filter((nome, posicao) => nome !== "Smith")


// REDUCE
const numeros = [1, 2, 3, 4, 5];
const total = numeros.reduce((valorAcumulado, valor) => {
    return valorAcumulado + valor
}, 0)

console.log(total)


// REDUCE
const objProdutos = [
    { nome: "Feijao", valor: 7.99, quantidade: 10 },
    { nome: "Arroz", valor: 12.50, quantidade: 5 },
    { nome: "Farinha", valor: 9.50, quantidade: 5 },
];
const totalP = objProdutos.reduce((valorAcumulado, produto) => {
    return valorAcumulado + (produto.valor * produto.quantidade)
}, 0)

console.log("Total de Estoque: " + totalP)
