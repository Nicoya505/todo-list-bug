
# 📝 **TODO LIST: El misterio de las tareas desprotegidas** 🔒

Esta es una aplicación de TODO LIST en la que se gestionan tareas de usuarios. Sin embargo, hay algunos problemas y vulnerabilidades que necesitan ser corregidos para asegurar el funcionamiento correcto y la protección de los datos.

Tu objetivo es identificar y resolver los problemas en el código relacionados con la **autenticación**, **autorización** y la correcta asignación de permisos para gestionar las tareas.

---
## 🚀 **Pasos**

Sigue estos pasos para levantar el proyecto:

1. **Realiza un Fork del repositorio**  
   Primero, haz un fork del proyecto desde el repositorio original. Puedes hacerlo directamente desde la interfaz de GitHub haciendo clic en el botón de "Fork".

2. **Clona el repositorio en tu máquina local**  
   Clona el repositorio forkeado:
   ```bash
   git clone https://github.com/tu-usuario/todo-list-bug.git
   cd todo-list-bug
   ```

3. **Utiliza docker**  
   Asegúrate de tener instalado docker y ejecuta el siguieten comando:
   ```bash
   docker-compose build
   ```

4. **Arranca el proyecto**
   Una vez que hayas construido tu imagen docker utiliza el siguiente comando para levantar el proyecto:
   ```bash
   docker-compose up -d
   ```

