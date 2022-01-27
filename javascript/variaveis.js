
// primeiras aulas sobre java scritp moderno
//variaveis 

let idade_pessoa = 23; //esse valor pode mudar

const cpf_pessoa = 12345678; //esse valor jamais se altera

//sem arrow function
let hello = function(){
    return "Hello World!";
}

//com arrow function
hello = () => {
    return "Hello World!";
}

//vetor
export let nomes = ['lucas', 'bianca', 'nilson', 'mariza'];

//constante
export const pi = 3.14;

//função
export function printMessage(name){
     console.log("Hello " + name);
}

//em um arquivo funcao.js
export default function(){
    console.log("Teste!");
 }
 
 //em outro arquivo
 import funcao from "funcao"
 funcao(); //Teste! 

 