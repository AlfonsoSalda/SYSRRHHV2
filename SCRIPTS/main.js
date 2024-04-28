// main.js
// Cargar administradores desde el almacenamiento local al iniciar
let administradores = JSON.parse(localStorage.getItem("administradores")) || [];

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario existe
    const usuarioExistente = administradores.find(admin => admin.workerId === userId);

    if (usuarioExistente) {
        // Verificar la contraseña
        if (usuarioExistente.password === password) {
            // Contraseña correcta, redirigir a RRHH.html
            window.location.href = "../pages/RRHH.html"
        } else {
            // Contraseña incorrecta
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
    } else {
        // Usuario no encontrado
        alert("Usuario no encontrado. Por favor, regístrate o verifica tus credenciales.");
    }
});
