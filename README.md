# 🌟 Luminis

**Luminis** is a Progressive Web App (PWA) built with [Lit](https://lit.dev/), [Vite](https://vitejs.dev/), and [Vaadin Router](https://vaadin.com/router). It's designed to be fast, modular, and scalable, with smooth navigation and clean styling.

![Luminis logo](./src/assets/icons/luminis-logo.png)

---

## 🚀 Features

- ⚡️ Fast rendering with **LitElement**
- 🌐 SPA navigation with **Vaadin Router**
- 🎨 Global and scoped CSS styling
- 📱 Installable as a **PWA**
- 🌈 Smooth page transitions
- 🧭 Reusable navigation component

---

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── icons/                → Icons and logos
│   ├── styles/               → CSS styles folder
│   │   ├── global.css        → Global styles
├── components/               → Lit components and pages
│   ├── pages/                → Lit pages
│   │   ├── home-page.js      → Home page example
│   │   ├── about-page.js     → About page example
│   │   ├── product-page.js   → Product page example with route params
│   ├── shared/               → Shared Lit components
│   │   └── NavBar.js         → Navigation component example
├── app.js                    → Main app entry point
├── router/index.js           → Router configuration
├── index.html                → Main HTML file
├── manifest.webmanifest      → PWA manifest
vite.config.js                → Vite configuration
```

---

## 🛠️ Requirements

- Node.js >= 18
- npm >= 8

---

## 📦 Installation

```bash
npm install
```

---

## 🧪 Development

```bash
npm run dev
```

This will start the app at [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Production Build

```bash
npm run build
```

Optimized files will be generated in the `/dist` folder.

---

## 🔍 Preview Build

```bash
npm run serve
```

---

## 📱 PWA

This app includes a `manifest.webmanifest` and uses `vite-plugin-pwa` to:

- Add to home screen
- Work offline (optional Service Worker)
- Define name, icon, and theme colors

---

## 🧹 Linting & Formatting

```bash
npm run lint      # Detect problems
npm run lint:fix  # Auto-fix issues
npm run format    # Format code with Prettier
```

---

## 📄 License

MIT License © 2025