import { LitElement, html } from '../../lit';

class CapsuleHoverCardContent extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tooltip');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(
  'capsule-hover-card-content',
  CapsuleHoverCardContent
);
