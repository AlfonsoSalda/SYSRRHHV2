let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function buscarEmpleado() {
  const idBuscado = document.getElementById("id").value;

  // Buscar al empleado por ID
  const empleado = empleados.find(empleado => empleado.id === idBuscado);

  if (empleado) {
    mostrarInformacion(empleado);
  } else {
    alert("Empleado no encontrado.");
  }
}

function mostrarInformacion(empleado) {
  document.getElementById("infoCompleta").innerHTML =
    `<p><strong>Nombre Completo:</strong> ${empleado.nombre}</p>` +
    `<p><strong>ID:</strong> ${empleado.id}</p>` +
    `<p><strong>Fecha de Nacimiento:</strong> ${empleado.fechaNacimiento}</p>` +
    `<p><strong>CURP:</strong> ${empleado.curp}</p>`;

  document.getElementById("nombre").value = empleado.nombre;
  document.getElementById("fechaNacimiento").value = empleado.fechaNacimiento;
  document.getElementById("curp").value = empleado.curp;

  document.getElementById("buscarFormulario").style.display = "none";
  document.getElementById("infoEmpleado").style.display = "block";
}

function actualizarInformacion() {
  const idActualizado = document.getElementById("id").value;
  const nombreActualizado = document.getElementById("nombre").value;
  const fechaNacimientoActualizada = document.getElementById("fechaNacimiento").value;
  const curpActualizada = document.getElementById("curp").value;

  // Verificar si el usuario ya existe
  const usuarioExistente = empleados.find(empleado => empleado.id === idActualizado);

  if (usuarioExistente && usuarioExistente.id !== idActualizado) {
    alert("El ID ya está registrado. Por favor, elige otro ID.");
    return;
  }

  // Actualizar la información del empleado
  empleados = empleados.map(empleado => {
    if (empleado.id === idActualizado) {
      empleado.nombre = nombreActualizado;
      empleado.fechaNacimiento = fechaNacimientoActualizada;
      empleado.curp = curpActualizada;
    }
    return empleado;
  });

  localStorage.setItem("empleados", JSON.stringify(empleados));

  // Mostrar la información actualizada en lugar del mensaje de "Actualizando..."
  mostrarInformacion({
    nombre: nombreActualizado,
    id: idActualizado,
    fechaNacimiento: fechaNacimientoActualizada,
    curp: curpActualizada
  });

  // Mostrar el alert después de mostrar la información actualizada
  setTimeout(() => {
    mostrarMensaje("Empleado modificado.");
  }, 100);
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
  window.location.href = "../pages/RRHH.html";
}
