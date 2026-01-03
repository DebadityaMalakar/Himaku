import { LitElement, html } from '../../lit';

class CapsuleCardHeader extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'header');
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

customElements.define('__PREFIX__-__COMPONENT__-header', CapsuleCardHeader);