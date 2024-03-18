let onglets = document.querySelectorAll('.onglets');
let test = document.getElementById("test");
let tousMesLiens = test.querySelectorAll("a")



/*onglets.forEach (() => {
    onglets.addEventListener('click', function  () {
    
        onglets.style.background = "black";
    })
})
onglets.forEach(onglet => {
    onglet.addEventListener('click',function(){
            onglet.style.backgroundColor='black';
            
         })

})*/
for (let i = 0; i < onglets.length; i++){
    onglets[i].style.background = rgb(223, 113, 113);
}
//a.addEventListener("click", function () {
   // a.style.color = "blue";
 // });

 for (let i = 0; i < tousMesLiens.length; i++){
    tousMesLiens[i].style.color = "green";
}


const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i * ""}deg)">${char}</pan>`
).join("")

const slidesContainer = document.getElementById("diaporama-couleurs");
const slide = document.querySelector(".couleur");
const prevButton = document.getElementById("fleche-defilement-prev");
const nextButton = document.getElementById("fleche-defilement-next");



prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

/*const logo = document.querySelector('.logo')

logo.style.position = "absolute";
let topPos = 0;
let dir = -1;


function hautBas() {
    if (topPos == 300) {
        dir = -1
    }else if (topPos == -50) {
        dir = -1
    }
    topPos += -2 * dir;
    logo.style.top = `${topPos}px`;
    
    requestAnimationFrame(hautBas)
}

requestAnimationFrame(hautBas);

/* To set the top position of an element with the ID "logo":
const logo = document.getElementById("logo");
const topPos = /* Your desired top position in pixels */; // Replace with the actual value
//logo.style.top = `${topPos}px`;

let enfant = document.querySelector(".menu. .menu .button");
let adulte = document.querySelector(".button");
let menuAdulte = document.querySelector(".Menu-Adulte");
let menuEnfant = document.querySelector(".Menu-enfant");

adulte.addEventListener("click", () => {
    menuAdulte.style.visibility = "visible";
    
})

enfant.addEventListener("click", () => {

    menuEnfant.style.visibility = "visible";
    
})





  