 const btnLogin = document.getElementById('btn-login');
 const divAzul = document.getElementById('azul')

btnLogin.addEventListener('click', () => {
    divAzul.style.backgroundColor = 'green'
 })

 const cards = document.getElementsByClassName("card"); 
cards[0].style.background = "red";

const texto = document.querySelector(".destaque > p");
 texto.textContent = 'Hackeado!'

 const botoes = document.querySelectorAll('button[disabled]');
 botoes.forEach(btn => {
btn.removeAttribute('disabled');
 })
