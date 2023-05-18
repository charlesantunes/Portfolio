const imgContainer = document.querySelector("#img-carrossel");
const img = document.querySelectorAll("#img-carrossel img");

let idN = 0;

function carrossel() {
    idN++;

    if (idN > img.length - 1) {
        idN = 0;
    }

    imgContainer.style.transform = `translateX(${-idN * 260}px)`;
}

setInterval(carrossel, 2000);