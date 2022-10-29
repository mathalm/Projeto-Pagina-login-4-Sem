document.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    Enviar()
  }
})

function Enviar() {

  let usuario = document.getElementsByClassName('usuario')[0].value;
  let senha = document.getElementsByClassName('senha')[0].value;

  if(usuario.length < 3 && senha.length < 3){
    alert('Input deve ter mais do que 3 caracteres.');
    return
  };
  
  window.location.pathname = '/BemVindo.html'

  let dadosAcessoJson = JSON.stringify({
    usuario: usuario,
    senha: senha
  });

  localStorage.setItem('acesso', dadosAcessoJson);
}