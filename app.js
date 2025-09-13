// app.js
(() => {
  const amigos = [];

  function atualizarLista() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // limpa a lista

    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo;
      li.style.background = '#fff';
      li.style.margin = '6px 0';
      li.style.padding = '8px';
      li.style.borderRadius = '6px';
      lista.appendChild(li);
    });
  }

  function adicionarAmigo() {
    const input = document.getElementById('nome-amigo');
    const nome = input.value.trim();

    if (nome === '') {
      alert('Digite um nome válido!');
      input.focus();
      return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
  }

  function sortearAmigo() {
    if (amigos.length === 0) {
      alert('Adicione pelo menos um nome antes de sortear.');
      return;
    }

    const resultado = document.getElementById('resultado');
    const idx = Math.floor(Math.random() * amigos.length);
    resultado.textContent = `Amigo secreto: ${amigos[idx]}`;
  }

  function limparLista() {
    if (amigos.length === 0) {
      alert("A lista já está vazia.");
      return;
    }

    amigos.length = 0; // esvazia o array
    atualizarLista();
    document.getElementById("resultado").textContent = "";
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-adicionar').addEventListener('click', adicionarAmigo);
    document.getElementById('sortear').addEventListener('click', sortearAmigo);
    document.getElementById('btn-limpar').addEventListener('click', limparLista);

    // permite usar Enter no campo de texto
    document.getElementById('nome-amigo').addEventListener('keydown', e => {
      if (e.key === 'Enter') adicionarAmigo();
    });
  });
})();
