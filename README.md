# 🌟 Luminis

**Luminis** es una aplicación web progresiva (PWA) construida con [Lit](https://lit.dev/), [Vite](https://vitejs.dev/), y [Vaadin Router](https://vaadin.com/router). Está pensada para ser rápida, modular, y escalable, con navegación fluida y estilo limpio.

![Luminis logo](./src/assets/icons/luminis-logo.png)

---

## 🚀 Características

- ⚡️ Renderizado rápido con **LitElement**
- 🌐 Navegación SPA con **Vaadin Router**
- 🎨 Estilos globales y scoped
- 📱 Listo para instalar como **PWA**
- 🌈 Transiciones suaves entre páginas
- 🧭 Componente de navegación reutilizable

---

## 🗂️ Estructura del proyecto

```
src/
├── assets/icons/           → Iconos y logos
├── components/             → Componentes y páginas Lit
│   ├── app.js              → App principal
│   ├── home-page.js        → Página de inicio
│   ├── about-page.js       → Página "Acerca de"
│   ├── product-page.js     → Página de producto
│   └── NavBar.js           → Componente de navegación
├── router.js               → Configuración de rutas
├── styles.css              → Estilos globales
├── index.html              → HTML principal
├── manifest.webmanifest    → Manifest PWA
vite.config.js              → Configuración de Vite
```

---

## 🛠️ Requisitos

- Node.js >= 18
- npm >= 8

---

## 📦 Instalación

```bash
npm install
```

---

## 🧪 Desarrollo

```bash
npm run dev
```

Esto lanzará la app en [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Build para producción

```bash
npm run build
```

Archivos optimizados en la carpeta `/dist`.

---

## 🔍 Vista previa del build

```bash
npm run serve
```

---

## 📱 PWA

La app incluye un `manifest.webmanifest` y `vite-plugin-pwa` para:

- Añadir a pantalla de inicio
- Funcionar offline (con Service Worker opcional)
- Definir nombre, ícono y colores

---

## 🧹 Linter y Formato

```bash
npm run lint      # Detectar problemas
npm run lint:fix  # Corregir automáticamente
npm run format    # Formatear con Prettier
```

---

## 📄 Licencia

MIT License © 2025 — [Tu nombre o equipo aquí]