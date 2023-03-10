const msgLose = "<span class=\"red\">Mala suerte:(</span>";
const msgWin = "<span class=\"green\">¡Enhorabuena!</span>";

export function displayModal(verificar, clicks) {
    if (verificar == false) {
        document.querySelector(".gano").innerHTML = msgLose;
        document.querySelector(".mensaje").innerHTML = "Las ranas se han atascado. ¡Inténtalo de nuevo!";
    } else {
        document.querySelector(".gano").innerHTML = msgWin;
        document.querySelector(".mensaje").innerHTML = `Has resuelto el puzzle con ${clicks} intentos`;
    }
    
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";

    modal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    const btnClose = document.querySelector(".btn-close");

    btnClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
}   