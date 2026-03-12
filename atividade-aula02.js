console.log("\n== 1) Tipos primitivos ==");

// String
let texto = "Olá mundo";
console.log(typeof texto); // string

// Number
let numero = 42;
console.log(typeof numero); // number

// Boolean
let ligado = true;
console.log(typeof ligado); // boolean

// Undefined
let indefinido;
console.log(typeof indefinido); // undefined

// Null
let nulo = null;
console.log(typeof nulo); // object (bug histórico do JavaScript)

// BigInt
let numeroGrande = 9007199254740991n;
console.log(typeof numeroGrande); // bigint

// Symbol
let simbolo = Symbol("id");
console.log(typeof simbolo); // symbol



console.log("\n== 2) BigInt e Symbol ==");

// BigInt
let big = 999999999999999999999n;
console.log(big); // 999999999999999999999n
console.log(typeof big); // bigint

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (cada Symbol é único)
console.log(typeof id1); // symbol



console.log("\n== 3) Operadores ==");

// Matemáticos
console.log(10 + 5); // 15
console.log(10 * 2); // 20

// Lógicos
console.log(true && false); // false
console.log(true || false); // true

// Comparação
console.log(5 > 3); // true
console.log(5 == "5"); // true (conversão automática)
console.log(5 === "5"); // false (tipo diferente)



console.log("\n== 4) Concatenação e conversão dinâmica ==");

console.log(2 + "2"); // "22" (concatenação)
console.log(2 + (+"2")); // 4 (conversão para número)

console.log("Olá " + "mundo"); // "Olá mundo"



console.log("\n== 5) Escopo léxico e blocos {} ==");

// bloco simples
{
  let dentro = "estou no bloco";
  console.log(dentro); // estou no bloco
}

// console.log(dentro); // erro se tentar acessar fora

// de fora para dentro
let fora = "variável externa";

{
  console.log(fora); // variável externa
}

// var vazando do if
if (true) {
  var vazou = "var escapa do bloco";
}

console.log(vazou); // var escapa do bloco



console.log("\n== 6) Shadowing com const ==");

const bloco = "valor";

if (true) {
  console.log(bloco); // valor

  {
    const bloco = "outro valor";
    console.log(bloco); // outro valor
  }

  console.log(bloco); // valor
}

console.log(bloco); // valor



console.log("\n== 7) Imutabilidade ==");

let palavra = "javascript";

palavra.toUpperCase();
console.log(palavra); // javascript (não mudou)

palavra = palavra.toUpperCase();
console.log(palavra); // JAVASCRIPT



console.log("\n== 8) Assincronismo com setTimeout ==");
console.log("Funções com setTimeout entram na fila e executam depois do código atual.");

// exemplo clássico
console.log("A");

setTimeout(() => {
  console.log("B"); // executa depois
}, 0);

console.log("C");
// ordem real: A C B



// segundo exemplo
setTimeout(() => {
  console.log("Timeout 0"); // executa primeiro
}, 0);

setTimeout(() => {
  console.log("Timeout 100"); // executa depois
}, 100);

console.log("Fim do código");
// ordem real: Fim do código -> Timeout 0 -> Timeout 100