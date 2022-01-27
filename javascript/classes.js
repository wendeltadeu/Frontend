// descrição de classes, metodos, get e set

class Pessoa{
    constructor(nome, idade){
         this.nome = nome;
         this.idade = idade;
    }

    imprimeNome(){
         console.log(this.nome);
    }
}

const p1 = new Pessoa('Lucas', 33);
p1.imprimeNome(); //Lucas

// Métodos Estáticos e Getters/Setters
class minhaClasse{
    static printSenseOfLife(){
         console.log("42");
    }
}

//note que nem precisei instanciar a classe usando new
minhaClasse.printSenseOfLife();

class Pessoa{
    constructor(nome, idade){
         this.nome = nome;
         this.idade = idade;
    }

    get getIdade(){
         return this.idade;
    }

    set setIdade(idade){
         this.idade = idade;
    }
}

let p = new Pessoa("Lucas", 0);
p.setIdade = 33;
console.log(p.getIdade);
