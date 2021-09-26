const $btn = document.querySelector("#btn");

$btn.addEventListener("click", () => {
console.log("Me persionaste");
});

const $inpText = document.querySelector("#text");

$inpText.addEventListener("keyup", (e) => {
    console.log(e); /* escribe */
    console.log(e.target.value); /* se ve tal cual lo que escribe el usuario */
});
