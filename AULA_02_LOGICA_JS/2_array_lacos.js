const numeros = [1, 2, 3, 4, 5];
console.log(numeros[2])
const textos = ["Olá", "Mundo", "JavaScript"];
console.log(textos[1])

const misturado = [1, "Olá", true, null, undefined, { nome: "Maria" }, [1, 2, 3]];
const objeto = { nome: "Maria", idade: 30, cidade: "São Paulo" };

console.log(objeto.nome)
Number, string, boolean, null, undefined, object, array
const pessoas = [
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 28 }
];

const pessoa = pessoas[1];
console.log(pessoa.nome)

const pedro = {
    nome: "Pedro",
    idade: 35,
    cidade: "Rio de Janeiro",
    "hobbies": ["futebol", "música", "viagens"],
    dependentes: [
        { nome: "Maria", idade: 10 },
        { nome: "João", idade: 5 }
    ],
    veiculos: [],
    conjuge: {
        nome: ""
    }
}