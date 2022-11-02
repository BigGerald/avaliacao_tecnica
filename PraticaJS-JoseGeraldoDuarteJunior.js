let pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];
//----------------Exercicio 3----------------

function ex3(n) {
  return pessoas.map((item) => {
    if (item.name == n) {
      return item;
    }
  });
}

console.log(ex3("Gabriel Gomes"));

//----------------Exercicio 4----------------

function ex4() {
  return pessoas.map((item) => {
    return item.name;
  });
}
console.log(ex4());

function ex4Bonus() {
  return pessoas.map((item) => {
    return item.name.split(" ", 1);
  });
}

console.log(ex4Bonus());

//----------------Exercicio 5----------------
function ex5() {
  return pessoas.map((item, index) => {
    item.id = index + 1;
    return { id: item.id, name: item.name, age: item.age };
  });
}
console.log(ex5());
pessoas = ex5();
//----------------Exercicio 6----------------
function ex6() {
  return pessoas.map((item) => {
    if (item.age >= 18) {
      return item;
    }
  });
}
console.log(ex6());

//----------------Exercicio 7----------------
function ex7() {
  let media = 0;
  pessoas.forEach((item) => {
    media += item.age;
  });
  return media / pessoas.length;
}

console.log(`Media das Idades: ${ex7()}`);
