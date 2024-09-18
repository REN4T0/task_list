import { showAlert } from "./alert.js";

const pageContent = document.querySelector("body");
const modal = document.querySelector(".modal");

export function showModal(){
    modal.style = `
    opacity: 1;
    z-index: 1;
    `;
    
    pageContent.style.overflowY = "hidden";
}

export function closeModal(button){
    modal.style = `
    opacity: 0;
    z-index: -1;
    `;

    pageContent.style.overflowY = "auto";

    try{
        if(button.classList.contains("update")){
            document.querySelector(".modal h1").innerText = "Nova tarefa";
            document.querySelector(".modal .update").removeAttribute("value");
            document.querySelector(".modal .update").className = "save";
            document.querySelector(".modal .save").innerText = "Salvar";
        }
    } catch (err){
        if(err.message !== "Cannot read properties of null (reading 'classList')"){
            showAlert("Estamos com problemas no sistema...\nCaso veja esse aviso, reporte ao desenvolvedor através do E-mail: renatecdev@gmail.com");
        }
    }
}

export function clearInputs(){
    document.querySelector("form input").value = "";
    document.querySelector("form textarea").value = "";
}