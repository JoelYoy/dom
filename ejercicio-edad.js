/* Leer el valor de la edad ingresado por el input 
y comprobar si el usurio es menor o mayor de edaad */

const edad = document.querySelector("#edad");
const input = document.querySelector("#input");

const Ege = () => {
    const inputValue = input.value;
    const mensaje = inputValue >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    edad.textContent = mensaje;
}
