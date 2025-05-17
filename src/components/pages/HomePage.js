import { LitElement, html, css } from 'lit';

class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }

    h1 {
      color: #2c3e50;
    }

    p {
      color: #34495e;
      font-size: 16px;
      line-height: 1.5;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
  `;

  // Deshabilitar Shadow DOM
  // createRenderRoot() {
  //   return this;
  // }

  // Método de renderizado
  render() {
    return html`
      <div class="container">
        <h1>Bienvenido a la página de inicio</h1>
        <p>
          Welcome to our application! We are a team of developers passionate
          about creating innovative and user-friendly software. Our goal is to
          deliver high-quality solutions that meet the needs of our users. We
          hope you enjoy using our product and find it useful!
        </p>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
