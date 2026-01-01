import { LitElement, html } from '../../lit';

class CapsuleComparisonAfter extends LitElement {
  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-comparison-after', CapsuleComparisonAfter);

