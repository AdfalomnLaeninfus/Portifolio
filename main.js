const corPrimaria = "#FF5959"
const corSegundaria = "#D382A9"
const corTerciaria = "#83819F"
const corQuaternaria = "#25242D"

const menuButtonHide = document.getElementById("MenuCel");
const celSubMenus = document.querySelector("nav");

menuButtonHide.addEventListener("click", ()=>{
    celSubMenus.classList.toggle("downMenu");
});