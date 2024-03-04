/*const para = document.querySelector(".button1");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Tu nombre es: " + name;
}*/

// DOMContentLoaded nos funciona para que el sistema 
//no corra el script hasta que toda la pagina este cargada
// Debido a que este da problemas si no existe el elemento
document.addEventListener("DOMContentLoaded", function() {

    const boton = document.querySelector(".button1");

    boton.addEventListener("click",updateName);

    function updateName(){
        let name = prompt("Introduce tu nombre");
        if (name !== null){
            boton.textContent= "Tu nombre es: " + name;
        }
    }
});

