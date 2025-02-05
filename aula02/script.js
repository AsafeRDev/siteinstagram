
document.getElementById("adicionaTarefa").addEventListener("click", function () {
    
    const inputTarefa = document.querySelector('#novaTarefa');
    const tarefaTexto = inputTarefa.value;

    console.log(tarefaTexto);

    if(tarefaTexto === ""){
        alert("O campo não pode estar vazio! ")
    }

    const listaTarefas = document.querySelector("#listaTarefas")

    //Cria um elemento LI
    const li = document.createElement("li")
    li.textContent = tarefaTexto;

    //Adiciona li ao Html

    listaTarefas.appendChild(li)

    inputTarefa.value = "";

});

document.getElementById("LimparTarefas").addEventListener("click", function(){

    const listaTarefas = document.querySelector("listarTarefa")
    listaTarefas.textContent = "";
})