export function showAlert(msg){
    document.querySelector(".toast").style.right = "1vw";
    document.querySelector(".toast p").innerText = msg;

    setTimeout(() => {
        document.querySelector(".toast").style.right = "-20%";
    }, 5000);
}