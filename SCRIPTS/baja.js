let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function darDeBaja() {
  const id = document.getElementById("id").value;

  // Buscar el índice del empleado en el arreglo
  const indice = empleados.findIndex(empleado => empleado.id === id);

  if (indice !== -1) {
    // Eliminar el empleado
    empleados.splice(indice, 1);
    localStorage.setItem("empleados", JSON.stringify(empleados));

    // Mostrar alerta y redirigir a RRHH.html al hacer clic en Aceptar
    alert("Empleado dado de baja exitosamente.");
    window.location.href = "../pages/RRHH.html";
  } else {
    // Usuario no encontrado
    alert("Empleado no encontrado. Verifica el ID ingresado.");
  }
}
