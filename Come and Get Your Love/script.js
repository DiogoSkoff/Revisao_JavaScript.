let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
let nota = media;
if (nota >= 7) {
console.log("Aprovado")
}
if (nota < 6){
    console.log("Reprovado")
}


function verificarTipo(variavel) {
    console.log("A variável é do tipo " + typeof variavel);
}

verificarTipo("Olá");
verificarTipo(10);
verificarTipo(true);

let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

let numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}

const calcularArea = (base, altura) => base * altura;
console.log(calcularArea(5, 3));

let listaDeCompras = ["Arroz", "Feijão", "Batata"];
listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();
console.log(listaDeCompras);

const alunos = [
    { nome: "Ana", nota: 8.5, idade: 20 },
    { nome: "João", nota: 6.7, idade: 22 },
    { nome: "Maria", nota: 9.3, idade: 19 },
    { nome: "Carlos", nota: 5.0, idade: 21 },
    { nome: "Beatriz", nota: 7.8, idade: 20 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovados);

const nomesAlunos = alunos.map(aluno => aluno.nome);
console.log(nomesAlunos);

const somaIdades = alunos.reduce((total, aluno) => total + aluno.idade, 0);
const mediaIdade = somaIdades / alunos.length;
console.log(mediaIdade);

const alunoEncontrado = alunos.find(aluno => aluno.nota < 6);
console.log(alunoEncontrado);

const titulo = document.getElementById("titulo");
const btnMudar = document.getElementById("btnMudar");

btnMudar.addEventListener("click", function() {
    titulo.innerText = "Título Alterado com Sucesso!";
});

let contagem = 0;
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");

btnIncrementar.addEventListener("click", function() {
    contagem++;
    contador.innerText = contagem;
});

const paragrafos = document.querySelectorAll(".paragrafo");
const btnDestacar = document.getElementById("btnDestacar");

btnDestacar.addEventListener("click", function() {
    paragrafos.forEach(function(elemento) {
        elemento.classList.add("destaque");
    });
});

const campoInput = document.getElementById("campoInput");
const textoRefletido = document.getElementById("textoRefletido");

campoInput.addEventListener("input", function() {
    textoRefletido.innerText = campoInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");
const resultado = document.getElementById("resultado");

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular() {
    return [Number(num1.value), Number(num2.value)];
}

btnSoma.addEventListener("click", function() {
    const [a, b] = calcular();
    resultado.innerText = somar(a, b);
});

btnSub.addEventListener("click", function() {
    const [a, b] = calcular();
    resultado.innerText = subtrair(a, b);
});

btnMulti.addEventListener("click", function() {
    const [a, b] = calcular();
    resultado.innerText = multiplicar(a, b);
});

btnDiv.addEventListener("click", function() {
    const [a, b] = calcular();

    if (b === 0) {
        resultado.innerText = "Não se divide por 0";
    } else {
        resultado.innerText = dividir(a, b);
    }
});

