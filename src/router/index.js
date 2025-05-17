import { Router } from '@vaadin/router';
import '../components/pages/HomePage.js';
import '../components/pages/AboutPage.js';
import '../components/pages/ProductPage.js';

export function initRouter(outlet) {
  const router = new Router(outlet);
  router.setRoutes([
    { path: '/', component: 'home-page' },
    { path: '/about', component: 'about-page' },
    { path: '/product/:id', component: 'product-page' },
    { path: '(.*)', component: 'home-page' }, // fallback
  ]);
}
