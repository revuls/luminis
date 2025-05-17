import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // Configuración de la raíz del proyecto
  root: 'src', // Directorio donde está tu código fuente (en este caso, la carpeta src)

  // Configuración de la salida de la compilación
  build: {
    outDir: '../dist', // Carpeta donde se generará el código compilado
    rollupOptions: {
      input: 'src/index.html', // El archivo HTML principal para Vite
    },
  },

  // Configuración del servidor de desarrollo
  server: {
    open: true, // Abrir automáticamente el navegador cuando inicie el servidor
    port: 3000, // Puerto donde se ejecutará el servidor
  },
  // Configuración de VitePWA para la generación de PWA
  // Puedes personalizar la configuración de VitePWA según tus necesidades
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Mi App Lit PWA',
        short_name: 'LitApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0078d7',
        icons: [
          {
            src: 'assets/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  // Si tienes que manejar recursos estáticos o imágenes, puedes configurar la carpeta de assets
  publicDir: 'src/assets', // Directorio donde se guardan los recursos públicos como imágenes, fuentes, etc.
});
