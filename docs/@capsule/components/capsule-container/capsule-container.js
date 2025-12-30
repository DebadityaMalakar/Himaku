import { LitElement, html } from '../../lit';

class CapsuleContainer extends LitElement {
  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-container', CapsuleContainer);
