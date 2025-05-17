import { LitElement, html } from 'lit';

export class ProductPage extends LitElement {
  static properties = {
    id: { type: String },
  };

  onBeforeEnter(location) {
    // esta función se ejecuta automáticamente si la defines
    this.id = location.params.id;
  }

  render() {
    return html` <h2>Producto: ${this.id}</h2> `;
  }
}

customElements.define('product-page', ProductPage);
