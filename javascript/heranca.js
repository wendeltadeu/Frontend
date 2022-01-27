// contrução de classes e herança

class Pessoa{
    constructor(nome){
         this.nome = nome;
    }

    imprimeNome(){
         console.log(this.nome);
    }
}

class Aluno extends Pessoa{
    constructor(nome, matricula){
         super(nome); //devemos invocar o construtor da classe pai por meio do método super()
         this.matricula = matricula;
    }

    imprimeMatricula(){
         console.log(this.matricula);
    }
}

const p2 = new Aluno('Carlos', 1029384);
p2.imprimeNome(); //Carlos
p2.imprimeMatricula(); //1029384