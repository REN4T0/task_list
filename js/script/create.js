import { showTasks } from "../script.js";

const colors = ["#F277B080", "#52CBD980", "#A9D94180", "#F2E5A280", "#F2780C80"]; // As cores que os post-its terão

export function createTask(){
    const storedData = JSON.parse(localStorage.getItem("taskData")) || []; // Estou pegando a lista de dados que criei no Local Storage.
    
    // Criando um objeto que conterá os dados cadastrados da tarefa
    const formData = {
        key: storedData.length, // O ID será baseado na quantidade de índices da lista
        taskName: document.querySelector("form input").value,
        taskInfo: document.querySelector("form textarea").value,
        color: colors[Math.round(Math.random() * (0 + 4) - 0)]
    }
    
    storedData.push(formData); // O objeto será armazenado na lista
    
    localStorage.setItem("taskData", JSON.stringify(storedData)); // Enviando a lista de dados atualizada de volta para o Local Storage
    showTasks();
}