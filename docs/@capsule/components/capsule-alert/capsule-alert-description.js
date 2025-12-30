import { LitElement, html } from '../../lit';

class CapsuleAlertDescription extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(
  'capsule-alert-description',
  CapsuleAlertDescription
);
