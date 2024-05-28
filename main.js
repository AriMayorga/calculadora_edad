import moment from "moment";
const fechaCumple = document.querySelector("#fecha_cumple");
const boton = document.querySelector("#boton_cumple");
const resultado = document.querySelector("#resultado");

// Funcion que en base a una fecha calcule la cantidad de años hasta el dia actual
function calcularEdad(fecha) {
  const fechaActual = moment();
  const fecha_cumple = moment(
    fecha,
    "YYYY-MM-DD"
  ); /* le puedo dar el formato que quiera*/
  const edad = fechaActual.diff(fecha_cumple, "years");
  /*year va a sacar la diferencia entre la fecha actual y la fecha del cumple */
  return edad;
}

boton.addEventListener("click", () => {
  resultado.innerText = calcularEdad(fechaCumple.value);
});
