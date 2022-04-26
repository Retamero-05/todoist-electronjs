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

  // criando uma tag em negrito
  const tagRemover = "<b onclick='removerItem(event)' > Remover </b>";

  //adicionando um texto para a tag li
  criarTagLi.innerHTML = valorInput + tagRemover;

  //adicionando a tag li para nossa ul
  minhatagUL.appendChild(criarTagLi);

  console.log(criarTagLi);

  console.log("Entrou na função Adicionar Item");
}

function removerItem(event) {
  //pegando tag <b> dentro do nosso evento
  const tagRemover = event.target;

  const tagLi = tagRemover.parentNode;

  console.log("Cliquei na função remover");

  tagLi.remove();

  console.log(tagRemover);

  console.log(tagLi);
}
