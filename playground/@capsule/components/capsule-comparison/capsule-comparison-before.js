import { LitElement, html } from '../../lit';

class CapsuleComparisonBefore extends LitElement {
  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(
  'capsule-comparison-before',
  CapsuleComparisonBefore
);

