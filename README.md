Santuario de Gatos – Frontend

Frontend del proyecto Santuario de Gatos, una plataforma solidaria enfocada en la protección, rescate y cuidado de gatos.
Este repositorio contiene la interfaz web desarrollada con React, Vite y Bootstrap.

Tecnologías utilizadas

React (JSX)

Vite

Bootstrap 5.3

React Icons

CSS personalizado

Requisitos previos

Asegúrate de tener instalado:

Node.js (versión 18 o superior recomendada)

npm o yarn

Instalación

Clona el repositorio:

git clone https://github.com/tu-usuario/santuario-gatos.git

Entra al proyecto:

cd santuario-gatos

Instala las dependencias:

npm install

Ejecución en entorno de desarrollo
npm run dev

Luego abre el navegador en:

http://localhost:5173

Estructura del proyecto
src/
├── components/
│ └── navbar.jsx
├── pages/
│ └── Home.jsx
├── App.jsx
├── main.jsx
├── App.css
└── index.css

public/
└── hero-gatos.jpg

Estilos y diseño

Bootstrap se utiliza como base de estilos.

Los colores y componentes se personalizan mediante CSS.

La sección principal (hero) usa una imagen de fondo con gradiente para mejorar la legibilidad del texto.

Dependencias principales

Instalación de Bootstrap:

npm install bootstrap

Importar en main.jsx:

import "bootstrap/dist/css/bootstrap.min.css";

Instalación de React Icons:

npm install react-icons

Uso de iconos:

import { FaHeart } from "react-icons/fa";

Estado del proyecto

En desarrollo.
Próximas mejoras incluyen:

Sección de gatitos en adopción

Página de donaciones

Panel de administración

Integración con backend

Licencia

Este proyecto es de uso libre con fines educativos y solidarios.
