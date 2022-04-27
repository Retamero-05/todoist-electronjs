//função responsavel por adicionar item pelo evento de onkeypress no input

function adicionarItemPelaTecla(event) {
  // pegando o tipo da tecla pelo evento
  const tecla = event.key;

  // verificando se a tecla pressionada é o enter

  if (tecla === "Enter") {
    // chamando a função responsável por adicioanr item

    adicionarItem();
  }
}

function adicionarItem() {
  const valorInput = document.getElementById("texto").value;

  //pegando a tag ul do nosso html pelo id
  const minhatagUL = document.getElementById("lista-de-tarefas");

  //criando tag li com javascript
  const criarTagLi = document.createElement("li");

  criarTagLi.addEventListener("click", concluirTarefa);

  // criando uma tag em negrito
  const tagRemover = `<i onclick="removerItem(event)" class="fa-solid fa-circle-minus"></i>`;

  //adicionando um texto para a tag li
  criarTagLi.innerHTML = valorInput + tagRemover;

  //adicionando a tag li para nossa ul
  minhatagUL.appendChild(criarTagLi);
}
function removerItem(event) {
  //pegando tag <b> dentro do nosso evento
  const meuIcone = event.target;

  const tagLi = meuIcone.parentElement;

  tagLi.remove();
}

function concluirTarefa(event) {
  const minhaTagLi = event.target;
  minhaTagLi.className = "concluida";
}
