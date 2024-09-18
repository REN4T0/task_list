function lengthCount(){
    const textArea = document.querySelector("textarea");
    const lenInfo = document.querySelector("form p");

    textArea.addEventListener("input", () => {
        lenInfo.innerText = `${textArea.value.length}/450`
    });
}

lengthCount();