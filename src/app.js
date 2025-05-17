import { LitElement, html } from 'lit';
import './components/shared/NavBar.js';
import { initRouter } from './router/index.js';

class App extends LitElement {
  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');
    initRouter(outlet);
  }

  render() {
    return html`
      <header>
        <nav-bar></nav-bar>
      </header>
      <main>
        <div id="outlet" class="fade-container"></div>
      </main>
      <footer>
        <p>&copy; 2023 Luminis. Todos los derechos reservados.</p>
      </footer>
    `;
  }
}

customElements.define('app-root', App);
