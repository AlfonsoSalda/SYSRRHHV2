let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function mostrarFormulario() {
  document.getElementById("registroFormulario").style.display = "block";
  document.getElementById("mensajeRegistro").style.display = "none";
}

function registrarEmpleado() {
  const nombre = document.getElementById("nombre").value;
  const id = document.getElementById("id").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const curp = document.getElementById("curp").value;

  // Verificar si el usuario ya existe
  const usuarioExistente = empleados.find(empleado => empleado.id === id);

  if (usuarioExistente) {
    alert("El ID ya está registrado. Por favor, elige otro ID.");
    return;
  }

  // Registrar el nuevo empleado
  const nuevoEmpleado = {
    nombre,
    id,
    fechaNacimiento,
    curp
  };

  empleados.push(nuevoEmpleado);
  localStorage.setItem("empleados", JSON.stringify(empleados));

  alert("Empleado registrado con éxito.");

  // Redirigir a RRHH.html después de hacer clic en Aceptar en la alerta
  setTimeout(() => {
    window.location.href = "../pages/RRHH.html";
  }, 100); // Pequeño retardo para permitir que se cierre la alerta antes de redirigir
}

function mostrarMensaje(mensaje) {
  document.getElementById("mensajeTexto").innerText = mensaje;
  document.getElementById("mensajeRegistro").style.display = "block";
  document.getElementById("registroFormulario").style.display = "none";
}
