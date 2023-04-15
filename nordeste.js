
const exploreBtn = document.getElementById("explore-btn");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const myButton = document.getElementById("myButton");
const form = document.querySelector('form');
const card1 = document.getElementById("card1");

exploreBtn.addEventListener("click", () => {
  alert("Botão 'Explorar' clicado!");
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

myButton.addEventListener("click", function() {
  alert("Botão clicado!");
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que a página seja recarregada

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    alert('Preencha todos os campos.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('E-mail inválido.');
    return;
  }

  // Aqui você pode fazer o envio dos dados do formulário
  // usando AJAX ou outro método, sem recarregar a página

  alert('Formulário enviado com sucesso!');
  form.reset(); // Limpa os campos do formulário
});

function isValidEmail(email) {
  // Aqui você pode implementar uma validação de e-mail mais complexa
  // ou simplesmente verificar se o formato é válido
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

card1.addEventListener("click", function() {
  // Executar ação desejada quando o card for clicado
});

