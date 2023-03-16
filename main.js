window.addEventListener("load",init);
const kepLista = ["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg"];

function init(){
    const articleElem = document.querySelectorAll("#kiskep");
    articleElem[0].innerHTML = "<div> <img src='kepek/kep1.jpg' alt='kep'> </div>";
    for (let index = 0; index < kepLista.length; index++) {
        articleElem[0].innerHTML  += `<div> <img src='${kepLista[index]}' alt='kep'> </div>`;
    
    };
    const kepElemLista = document.querySelector("article div img"); 
    console.log(kepElemLista);
    const nagyKep = document.querySelectorAll(".nagykep img");
    for (let index = 0; index < kepElemLista.length; index++) {
        kepElemLista[index].addEventListener("click",fnev)
        
    const jobbGomb = document.querySelector("section .balButton");
    const balGomb = document.querySelector("section .jobbButton");
    balGomb[0].addEventListener("click", function(){
        if (balSzamlalo >= kepLista.length-1){
            balSzamlalo = 0;
        }else {
            balSzamlalo++;
        }
        n
    })
    
    
    }
    function fnev(){

        const nagyKep = document.querySelectorAll("section div img");
        nagyKep[0].src = event.target.src;
    }
}
        
    