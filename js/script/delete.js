import { showTasks } from "../script.js";

export function deleteTask(key){
    let storedData = JSON.parse(localStorage.getItem("taskData")); // Coletando a lista de dados
    delete storedData[key]; // Excluindo um objeto dos dados baseado em seu ID
    localStorage.setItem("taskData", JSON.stringify(storedData)); // Enviando a lista atualizada para o Local Storage
    showTasks();
}