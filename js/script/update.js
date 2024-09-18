import { showTasks } from "../script.js";

export function updateTask(key){
    let storedData = JSON.parse(localStorage.getItem("taskData")); // Coletando a lista de dados

    // Selecionando as alterações na tarefa
    let updatedTaskName = document.querySelector(".modal input").value;
    let updatedTaskInfo = document.querySelector(".modal textarea").value;

    // Inserindo os dados atualizados na lista de dados
    storedData[key].taskName = updatedTaskName;
    storedData[key].taskInfo = updatedTaskInfo;

    localStorage.setItem("taskData", JSON.stringify(storedData)); // Enviando a lista de dados atualizada de volta ao Local Storage
    showTasks();
}