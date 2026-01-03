import { LitElement, html } from '../../lit';

class CapsuleCardBody extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', 'Card content');
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

customElements.define('__PREFIX__-__COMPONENT__-body', CapsuleCardBody);
