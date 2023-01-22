export function croak() {
    var frog_croak = new Audio();
    frog_croak.src = "./assets/audios/frog_croak.mp3";
    frog_croak.play();
}

export function win() {
    var win = new Audio();
    win.src = "./assets/audios/win.mp3";
    win.play();
}

export function lose() {
    var lose = new Audio();
    lose.src = "./assets/audios/lose.mp3";
    lose.play();
}