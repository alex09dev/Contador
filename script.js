let count = 0;
document.querySelector(".count").innerHTML = "<h2>" + count + "</h2>";
function mostrar() {
  document.querySelector(".count").innerHTML = "<h2>" + count + "</h2>";
}
function increment() {
  count++;
  mostrar();
}
function decrement() {
  count--;
  mostrar();
}

function reset() {
    count=0
    mostrar()
}