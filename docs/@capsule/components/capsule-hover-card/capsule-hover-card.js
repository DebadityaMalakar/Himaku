import { LitElement, html } from '../../lit';

class CapsuleHoverCard extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-hover-card', CapsuleHoverCard);

