# Actividad 8: Clon de Twitter (Autenticación y Rutas Protegidas)

## 📌 Descripción del Proyecto
Proyecto integrador del Módulo 4: Aplicación completa de un **Clon de Twitter (X)** desarrollada en **React 18** con arquitectura modular profesional:
- **Autenticación Simulada:** Inicio y cierre de sesión con persistencia en `localStorage`.
- **Rutas Protegidas (`ProtectedRoute`):** El acceso a la vista `/profile` requiere estar autenticado; de lo contrario, redirige a `/login`.
- **Gestión de Tweets:** Formulario de publicación con límite de caracteres, listado dinámico y eliminación de publicaciones propias.
- **Sistema de Likes:** Botón interactivo de "me gusta" con contador persistente.
- **Perfil de Usuario:** Estadísticas de actividad, fecha de registro y listado exclusivo de sus tweets.
- **Compatibilidad 100% con GitHub Pages:** Enrutador `HashRouter` y `base: './'` en `vite.config.js`.
