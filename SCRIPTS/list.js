document.addEventListener("DOMContentLoaded", function() {
    // Cargar la lista de empleados al cargar la página
    cargarListaEmpleados();
});

function cargarListaEmpleados() {
    const listaEmpleados = document.getElementById("listaEmpleados");

    // Obtener la lista de empleados del almacenamiento local
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

    // Ordenar alfabéticamente por nombre
    empleados = empleados.sort((a, b) => a.nombre.localeCompare(b.nombre));

    if (empleados.length > 0) {
        // Crear la tabla dinámicamente utilizando Bootstrap
        const tabla = document.createElement("table");
        tabla.className = "table table-striped";

        // Crear el encabezado
        tabla.innerHTML = `
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>ID</th>
              <th>Fecha de Nacimiento</th>
              <th>CURP</th>
            </tr>
          </thead>
          <tbody id="listaEmpleados">
            <!-- Se generará la lista dinámicamente con JavaScript -->
          </tbody>
        `;

        // Crear filas para cada empleado
        const tbody = tabla.querySelector("tbody");
        empleados.forEach(empleado => {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${empleado.nombre}</td><td>${empleado.id}</td><td>${empleado.fechaNacimiento}</td><td>${empleado.curp}</td>`;
            tbody.appendChild(fila);
        });

        // Agregar la tabla a la página
        listaEmpleados.appendChild(tabla);
    } else {
        listaEmpleados.innerHTML = "<p>No hay empleados registrados.</p>";
    }
}

function regresarAlMenu() {
    // Redirigir a RRHH.html
    window.location.href = "../pages/RRHH.html";
}
