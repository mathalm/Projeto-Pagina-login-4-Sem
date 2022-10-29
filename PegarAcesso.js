


let jsonAcesso = localStorage.getItem('acesso');

let acesso = JSON.parse(jsonAcesso)

console.log(acesso);

document.querySelector('#mensagem').innerHTML = `<h3>Bem-Vindo, ${acesso.usuario}</h3>`