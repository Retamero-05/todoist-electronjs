function adicionarItemPelaTecla(event) {
  const tecla = event.key;

  if (tecla === "Enter") {
    adicionarItem();
  }
}

function adicionarItem() {
  const valorInput = document.getElementById("texto").value;

  //pegando a tag ul do nosso html pelo id
  const minhatagUL = document.getElementById("lista-de-tarefas");

  //criando tag li com javascript
  const criarTagLi = document.createElement("li");

  //adicionando um texto para a tag li
  criarTagLi.innerText = valorInput;

  //adicionando a tag li para nossa ul
  minhatagUL.appendChild(criarTagLi);

  console.log(criarTagLi);

  console.log("Entrou na função Adicionar Item");
}
