// Asignar el evento de clic al botón de calificar
document.getElementById("evaluacionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del formulario
});

// Función para calificar al empleado
function calificarEmpleado() {
    // Obtener los valores de las calificaciones
    const calificaciones = obtenerCalificaciones();

    // Verificar que se hayan seleccionado todas las calificaciones
    if (calificaciones.length === 10) {
        // Calcular el promedio de las calificaciones
        const promedio = calcularPromedio(calificaciones);

        // Mostrar el mensaje de calificación
        mostrarMensaje(`El empleado tiene una calificación promedio de: ${promedio.toFixed(2)}`);

        // Redirigir a la página de RRHH después de mostrar el mensaje
        setTimeout(() => {
            const confirmacion = confirm("Calificación de empleado entregada.");
            if (confirmacion) {
                window.location.href = "../pages/RRHH.html";
            } else {
                // Lógica adicional si no se redirige
            }
        }, 1000);
    } else {
        // Mostrar mensaje de error si no se seleccionaron todas las calificaciones
        mostrarMensaje("Por favor, califica al empleado en todas las categorías.");
    }
}

// Función para obtener las calificaciones seleccionadas
function obtenerCalificaciones() {
    const calificaciones = [];

    // Iterar sobre los radio buttons de cada pregunta y obtener el valor seleccionado
    const preguntas = document.querySelectorAll("input[type='radio']:checked");
    preguntas.forEach(pregunta => {
        calificaciones.push(parseInt(pregunta.value)); // Convertir el valor a entero y agregarlo al array
    });

    return calificaciones;
}

// Función para calcular el promedio de las calificaciones
function calcularPromedio(calificaciones) {
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return suma / calificaciones.length;
}

// Función para mostrar un mensaje
function mostrarMensaje(mensaje) {
    document.getElementById("mensajeTexto").innerText = mensaje;
    document.getElementById("mensajeCalificacion").style.display = "block";
}
