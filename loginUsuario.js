// Programa de autentificação de usuário;

const prompt = require ('prompt-sync')({sigint: true}); 

let login = "MariaSilva";
let senha = "MeuNomeEMaria";
let seuLogin = prompt("Nome do usuário: ");
let suaSenha = prompt("Senha: ");

if(seuLogin === login && suaSenha === senha){
    console.log("Seja bem vindo(a)!")
}else{
    console.log("Usuário ou senha inválidos!");
    console.log("Tente novamente!");
}
