 const btnLogin = document.getElementById('btn-login');
 const divAzul = document.getElementById('azul')

btnLogin.addEventListener('click', () => {
    divAzul.style.backgroundColor = 'green'
 })


const cards = document.getElementsByClassName("card");
cards[0].style.width = '100px';
cards[0].style.height = '100px';
cards[0].style.backgroundColor = 'red';
cards[2].style.width = '100px';
cards[2].style.height = '100px';
cards[2].style.backgroundColor = 'yellow';

const imagens = document.getElementsByTagName("img");
console.log('Temos ${imagens.length} img');

const texto = document.querySelector(".destaque > p");
 texto.textContent = 'Hackeado!'

 const botoes = document.querySelectorAll('button[disabled]');
 botoes.forEach(btn => {
btn.removeAttribute('disabled');
 })
