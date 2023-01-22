const btnRfrsh = document.getElementById('refresh');
const btnResult = document.getElementById('btn-resultado');
const btnClose = document.querySelector('.btn-close');
let i = 0;

btnRfrsh.addEventListener('click', () => {
    location.reload();
});

btnResult.addEventListener('click', () => {
    const divResult = document.getElementById('resultado');
    i += 1;
    if (i % 2 == 0) {
        btnResult.textContent = "RESULTADO";
        divResult.style.display = "none";
    } else {
        btnResult.textContent = "OCULTAR";
        divResult.style.display = "block";
    }
});

btnClose.addEventListener("click", () => {
    location.reload();
});