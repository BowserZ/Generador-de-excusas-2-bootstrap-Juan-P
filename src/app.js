let nombre = prompt("Ingresa un nombre:");
let lugar = prompt("Ingresa un lugar:");
let accion = prompt("Ingresa lo que estaba haciendo esta persona");
let show = prompt("Ingresa un show:");
let resultado =
  nombre +
  " estaba en " +
  lugar +
  " " +
  accion +
  " mientras miraba " +
  show +
  ".";

document.getElementById("excuse").innerHTML = resultado;

let excusasGuardadas = localStorage.getItem("ultimasExcusas");

if (excusasGuardadas === null) {
  excusasGuardadas = [];
} else {
  excusasGuardadas = JSON.parse(excusasGuardadas);
}

excusasGuardadas.push(resultado);

if (excusasGuardadas.length > 5) {
  excusasGuardadas.shift();
}

localStorage.setItem("ultimasExcusas", JSON.stringify(excusasGuardadas));

document.getElementById("excuses").innerHTML =
  "<ol>" +
  excusasGuardadas
    .map(allexcuses => "<li>" + allexcuses + "</li>")
    .join("<br>") +
  "</ol>";
