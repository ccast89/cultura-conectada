# Cultura Conectada

Cultura Conectada es una aplicación web desarrollada para explorar y difundir contenidos culturales de Tucumán y del noroeste argentino. Práctica propuesta por RollingCode School, como parte del curso de Web Development

La plataforma reúne diferentes expresiones culturales, tradicionales y contemporáneas, organizadas en categorías como música, cine, arte digital, videojuegos, literatura y cultura local o regional.

## Tecnologías utilizadas

- React
- React Router
- JavaScript
- Tailwind CSS
- Vite

## Funcionalidades

La aplicación permite:

- Explorar todos los contenidos culturales disponibles.
- Visualizar los contenidos organizados por categorías.
- Acceder a los contenidos de una categoría específica.
- Ver información detallada de cada contenido.
- Navegar entre las diferentes vistas sin recargar la página.
- Identificar la sección activa desde el menú de navegación.
- Mostrar una página de error cuando una ruta o contenido no existe.
- Adaptar la visualización a diferentes tamaños de pantalla.

## Rutas principales

- `/` - Página de inicio.
- `/explorar` - Muestra todos los contenidos.
- `/categorias` - Muestra las categorías disponibles.
- `/categoria/:categoria` - Muestra los contenidos de una categoría.
- `/contenido/:id` - Muestra el detalle de un contenido.
- `/sobre` - Información sobre Cultura Conectada.
- `*` - Página no encontrada.

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Luego se puede acceder a la dirección local indicada por Vite en la terminal.

## Autora

Proyecto desarrollado por Carla E. Castellano Gómez como actividad integradora de React y React Router para RollingCode School.
