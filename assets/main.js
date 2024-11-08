let titulo = document.querySelector("#titulo");
let b = document.querySelector("#btn");

//CON addEventListener

/*b.addEventListener("click", function () {
  titulo.innerHTML = "Chao mundo";
  titulo.style.color = "red";
});
*/

//CON onclick

b.onclick = function () {
  titulo.innerHTML = "Chao mundo";
  titulo.style.color = "red";
};
