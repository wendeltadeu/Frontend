const nomes = ['Alberto', 'Sérgio', 'Eduardo'];
console.log(...nomes);

/*O vetor nomes foi quebrado em 3 elementos: 
"Alberto"
"Sérgio"
"Eduardo"
*/

const dbz = ['Goku', 'Vegeta', 'Piccolo'];
const yuyu = ['Yusuke', 'Hiei', 'Toguro'];

const personagensAnime = [... dbz, ...yuyu, 'Naruto', 'InuYasha'];

console.log(personagensAnime); //["Goku", "Vegeta", "Piccolo", "Yusuke", "Hiei", "Toguro", "Naruto", "InuYasha"]

class Pessoa{
    constructor(nome, sobrenome){
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  }
  
  p = new Pessoa('Lucas', 'Lattari');
  
  const newPessoa = {
    ...p,
    profissao: 'professor'
  };
  
  console.log(newPessoa);

  // rest

  function returnArray(...args){
    return args;
}

array = returnArray(0, 1, 2);
console.log(array); //[0, 1, 2]

function sum(...numbers){
    let result = 0;
    for (const n of numbers){
         result += n;
    }
    console.log(result);
}

sum(1, 2, 3); //6
sum(1, 2, 3, 4); //10
sum(1, 2, 3, 4, 5); //15

// desestruturação
//desestruturação de vetor
[nome, sobrenome] = ['Lucas', 'Lattari'];
console.log(nome); //Lucas
console.log(sobrenome); //Lattari

[n1] = ['Luis', 'Carlos', 'Da Silva'];
console.log(n1); //Luis (os sobrenomes são perdidos e apenas o nome é retido em n1)

[, , n3] = ['Luis', 'Carlos', 'Da Silva'];
console.log(n3); //Da Silva (apenas o último sobrenome é retido)

const obj = {nome: 'Carlos', sobrenome: 'Da Silva'};

let {nome, sobrenome} = obj;
console.log(nome); //Carlos
console.log(sobrenome); //Da Silva
