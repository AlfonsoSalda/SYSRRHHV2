import webbrowser
import os
import http.server
import socketserver
import signal

# Obtén el directorio actual
current_dir = os.path.dirname(os.path.realpath(__file__))

# Define el puerto en el que se ejecutará el servidor, ahora será 8080
port = 8000

# Cambia al directorio del proyecto
os.chdir(current_dir)

# Define la clase para manejar las solicitudes HTTP
class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Llama a la implementación original de do_GET
        http.server.SimpleHTTPRequestHandler.do_GET(self)
        
    def do_POST(self):
        # Llama a la implementación original de do_POST
        http.server.SimpleHTTPRequestHandler.do_POST(self)

# Configura el servidor para que se pueda cerrar con Ctrl+C de manera segura
with socketserver.TCPServer(("", port), MyHttpRequestHandler) as httpd:
    print(f"Servidor en http://localhost:{port}")
    
    # Abre el navegador con la página index.html de la carpeta actual
    webbrowser.open(f"http://localhost:{port}/index.html")

    # Imprime el directorio actual para depuración
    print("Directorio actual:", current_dir)

    try:
        # Espera a que el servidor sea cerrado manualmente (Ctrl+C)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("Servidor detenido por el usuario (Ctrl+C detectado)")
        httpd.server_close()
