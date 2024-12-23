/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',  // Si tus plantillas están aquí
    './**/template/*.html',   // Ruta que coincide con tu estructura
    './**/*.py',              // Para archivos Django (opcional)
    './static/src/**/*.{html,js}', // Para archivos HTML o JS en static
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
