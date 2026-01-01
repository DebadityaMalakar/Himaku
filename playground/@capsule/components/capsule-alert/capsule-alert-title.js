import { LitElement, html } from '../../lit';

class CapsuleAlertTitle extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'heading');
    this.setAttribute('aria-level', '2');
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-alert-title', CapsuleAlertTitle);
