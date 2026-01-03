import { LitElement, html } from '../../lit';

class CapsuleCardTitle extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'heading');
    this.setAttribute('aria-level', '3');
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('__PREFIX__-__COMPONENT__-title', CapsuleCardTitle);