import { createTask } from "./script/create.js";
import { readTask } from "./script/read.js";
import { updateTask } from "./script/update.js";
import { deleteTask } from "./script/delete.js";

import { showModal } from "./assets/modal.js";
import { closeModal } from "./assets/modal.js";
import { clearInputs } from "./assets/modal.js";
import { showAlert } from "./assets/alert.js";

const content = document.querySelector("main"); // O conteúdo da página, onde ficará as minhas tarefas

// Função que vai exibir as tarefas na tela
export function showTasks() {
    content.innerText = "";
    const storedData = JSON.parse(localStorage.getItem("taskData")) || []; // Coletando a lista de dados armazenados no Local Storage. Caso ainda não haja essa lista, ela será instantânemante criada.

    // Looping que vai inserir cada item da minha lista de tarefas na tela
    for (let item of storedData) {
        if (item !== null) {
            // Criando os elementos que conterão os dados
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            let btn = document.createElement("button");
            let img = document.createElement("img");

            // Adicionando um ID, uma classe e a cor do post-it (O ID vai ajudar a exibir o conteúdo completo da tarefa)
            div.id = item.key;
            div.classList.add("taskCanvas");
            div.style.backgroundColor = item.color

            let shortInfo; // Essa variável vai ter o resumo do conteúdo de uma tarefa

            if (item.taskInfo.length > 50) {
                let taskDetail = item.taskInfo.slice(50, item.taskInfo.length); // Selecionando parte do conteúdo da terefa (estou selecionando os 50 1°s caracteres do caracteres totais do conteúdo)
                shortInfo = item.taskInfo.replace(taskDetail, "..."); // O restante será substituído por reticências, indicando que há mais para ler, mas o conteúdo completo não cabe nesse espaço
            } else {
                shortInfo = item.taskInfo; // Caso o conteúdo da tarefa seja pequeno, ele será exibido por completo no post-it
            }

            // Exibindo o título e o resumo da tarefa no post-it
            h2.innerText = item.taskName;
            p.innerText = shortInfo;

            // Criando o botão de deletar (O que inclui o ícone que irá dentro dele)
            btn.value = item.key; // O botão terá o ID da tarefa, para saber-se qual que deve-se excluir
            btn.classList.add("del");

            img.value = item.key;
            img.classList.add("del");
            img.src = "./icons/trash.svg";

            // Exibindo os elementos criados
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(btn);
            btn.appendChild(img);
            content.appendChild(div);
        }
    }
}

function notNull(taskTitle, taskDetail){
    if(taskTitle == "" || taskDetail == ""){
        throw new TypeError("Nenhum valor vazio pode ser enviado");
    };

    return true;
}

window.addEventListener("load", () => {
    showTasks();
});

document.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    let el = e.target;

    if (el.classList.contains("close")) {
        closeModal(document.querySelector(".update"));
        clearInputs();
    }

    if (el.classList.contains("add")) {
        showModal();
    }

    if (el.classList.contains("save")) {
        try {
            notNull(document.querySelector("form input").value, document.querySelector("form textarea").value);
        } catch(err){
            showAlert(err.message);
            return false;
        }

        createTask();
        closeModal(el);
        clearInputs();
    }

    if (el.classList.contains("del")) {
        deleteTask(el.value);
    }

    if (el.classList.contains("taskCanvas")) {
        readTask(Number(el.id));
    }

    if (el.classList.contains("update")) {
        try {
            notNull(document.querySelector("form input").value, document.querySelector("form textarea").value);
        } catch(err){
            showAlert(err.message);
            return false;
        }

        updateTask(Number(el.value));
        closeModal(el);
        clearInputs();
    }
})