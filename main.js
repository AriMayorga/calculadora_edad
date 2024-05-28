import moment from "moment";
const fechaCumple = document.querySelector("#fecha_nacimiento");
const boton = document.querySelector("#boton_cumple");
const resultado = document.querySelector("#resultado");

function calculadoraEdad(fecha) {
  const fechaActual = moment();
  const fechaCumple = moment(
    fecha,
    "YYYY-MM-DD"
  ); /* le puedo dar el formato que quiera*/
  const edad = fechaActual.diff(fecha_cumple, "years");
  /*year va a sacar la diferencia entre la fecha actual y la fecha del cumple */
  return edad;
}

boton.addEventListener("click", () => {
  resultado.innerText = calculadoraEdad(fechaCumple.value);
});
