const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];
//----------------Exercicio 3----------------
const ex3 = pessoas.map((item) => {
  if (item.name == "Gabriel Gomes") {
    return item;
  }
});
console.log(ex3);

//----------------Exercicio 4----------------
const ex4 = pessoas.map((item) => {
  return item.name;
});
console.log(ex4);

const ex4Bonus = pessoas.map((item) => {
  return item.name.split(" ",1);
});
console.log(ex4Bonus);

//----------------Exercicio 5----------------
const ex5 = pessoas.map((item, index) => {
  item.id = index + 1;
  return { id: item.id, name: item.name, age: item.age };
});
console.log(ex5);

//----------------Exercicio 6----------------
const ex6 = ex5.map((item) => {
  if (item.age >= 18) {
    return item;
  }
});
console.log(ex6);

//----------------Exercicio 7----------------
let ex7 = 0;
ex5.forEach((item) => {
  ex7 = item.age + ex7;
});
ex7 = ex7 / pessoas.length;

console.log(`Media das Idades: ${ex7}`);