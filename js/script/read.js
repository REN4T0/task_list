import { showModal } from "../assets/modal.js";

export function readTask(key){
    let storedData = JSON.parse(localStorage.getItem("taskData")); 
    
    document.querySelector(".modal h1").innerText = "Minha Tarefa";

    // Tanto no input, quanto no text-area, vão ser inseridos os dados da tarefa, para ser visualizada através do modal
    document.querySelector(".modal input").value = storedData[key].taskName;
    document.querySelector(".modal textarea").value = storedData[key].taskInfo;

    // O botão será alterado para, ao invés de salvar uma nova tarefa, salvar a alteração de uma já existente
    document.querySelector(".modal .save").innerText = "Atualizar";
    document.querySelector(".modal .save").className = "update";
    document.querySelector(".modal .update").value = key; // O botão terá o ID da tarefa, para saber-se qual tarefa alterar
    showModal();
}