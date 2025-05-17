import { LitElement, html, css } from 'lit';

export class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #0078d7;
      color: white;
      font-family: sans-serif;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: bold;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
      margin: 0;
      padding: 0;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="logo">Luminis</div>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca</a></li>
          <li><a href="/product/hola">Producto</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
