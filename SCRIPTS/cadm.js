// cadm.js

// Cargar administradores desde el almacenamiento local al iniciar
let administradores = JSON.parse(localStorage.getItem("administradores")) || [];

function verificarYCrearAdmin() {
    const workerId = document.getElementById("workerId").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const adminPassword = document.getElementById("adminPassword").value;

    // Verificar si las contraseñas son iguales
    if (newPassword === confirmPassword) {
        // Verificar si la contraseña del administrador supremo es correcta
        if (adminPassword === "8080") {
            // Verificar si el usuario ya existe
            const usuarioExistente = administradores.find(admin => admin.workerId === workerId);

            if (!usuarioExistente) {
                // Crear un nuevo objeto administrador
                const nuevoAdmin = {
                    workerId: workerId,
                    password: newPassword
                };

                // Agregar el nuevo administrador al array
                administradores.push(nuevoAdmin);

                // Guardar la lista actualizada en el almacenamiento local
                localStorage.setItem("administradores", JSON.stringify(administradores));

                // Limpiar los campos del formulario
                document.getElementById("workerId").value = "";
                document.getElementById("newPassword").value = "";
                document.getElementById("confirmPassword").value = "";
                document.getElementById("adminPassword").value = "";

                // Notificar al usuario y redirigir a index.html
                alert("Administrador creado exitosamente.");
                window.location.href = "/index.html";
            } else {
                alert("El usuario ya existe. Por favor, elige otro ID de trabajador.");
            }
        } else {
            alert("Contraseña del administrador supremo incorrecta.");
        }
    } else {
        alert("Las contraseñas no coinciden.");
    }
}
