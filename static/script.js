const enviar = document.getElementById("enviar");
const carta = document.getElementById("carta");

enviar.addEventListener("click", () => {
  const contenido = carta.value;
  window.open("mailto:ingmariatovar@gmail.com?subject=Curriculum Vitae&body=" + contenido);
});