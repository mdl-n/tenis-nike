let body = document.querySelector("body")
let imgTenis = document.querySelector(".img1tenis")
let btnAdd = document.querySelector(".btn-AddCarinho")

function mudarCor(cor, novaImg){
    body.style.background = cor;
    btnAdd.style.background = cor;
    console.log(btnAdd)

    imgTenis.style.opacity = 0;

    setTimeout(() => {
        imgTenis.src = novaImg;
        imgTenis.style.opacity = 1;
    }, 300);
}