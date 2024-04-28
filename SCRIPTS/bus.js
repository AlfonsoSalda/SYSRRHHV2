let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function buscarEmpleado() {
  const nombreBusqueda = document.getElementById("nombreEmpleado").value.trim();

  if (nombreBusqueda === "") {
    alert("Por favor, ingresa el nombre del empleado.");
    return;
  }

  // Verificar si el usuario existe
  const empleadoEncontrado = empleados.find(empleado => empleado.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

  if (empleadoEncontrado) {
    mostrarResultadoBusqueda(empleadoEncontrado);
  } else {
    alert("Empleado no encontrado.");
  }
}

function mostrarResultadoBusqueda(empleado) {
  // Mostrar el formulario con la información del empleado
  document.getElementById("nombreResultado").value = empleado.nombre;
  document.getElementById("idResultado").value = empleado.id;
  document.getElementById("fechaNacimientoResultado").value = empleado.fechaNacimiento;
  document.getElementById("curpResultado").value = empleado.curp;

  document.getElementById("informacionEmpleado").style.display = "block";

  // Mostrar alerta y redirigir a RRHH.html al hacer clic en Aceptar
  setTimeout(() => {
    const confirmacion = confirm("Empleado encontrado.");
    if (confirmacion) {
      window.location.href = "../pages/RRHH.html";
    } else {
      limpiarFormulario();
    }
  }, 100);
}

function limpiarFormulario() {
  document.getElementById("nombreEmpleado").value = "";
  document.getElementById("informacionEmpleado").style.display = "none";
}
