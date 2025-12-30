import { LitElement, html } from '../../lit';

class CapsuleChip extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-badge', CapsuleChip);
