/* Colocar una lista en el documento HTML,
colocar un boton que diga agregar elemento.
Cada ves que le den clic al boton debe agregar un elemento
a la lista.  
*/


const $btn = document.querySelector("#btn");
const $list = document.querySelector("#list");

$btn.addEventListener("click", () => {
    // <li><</li>
    const listItem = document.createElement("li");  
    listItem.textContent = "nuevo elemto";
    $list.appendChild(listItem);
    
})



