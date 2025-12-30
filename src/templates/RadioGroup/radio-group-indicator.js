import { LitElement, html } from '../../lit';

class CapsuleRadioGroupIndicator extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('part', 'indicator-inner');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('__PREFIX__-__COMPONENT__-indicator', CapsuleRadioGroupIndicator);

