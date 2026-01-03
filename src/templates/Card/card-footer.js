import { LitElement, html } from '../../lit';

class CapsuleCardFooter extends LitElement {
  static properties = {
    alignment: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.alignment = 'start'; // start, center, end, space-between
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'footer');
    this.updateAlignment();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    if (changedProperties.has('alignment')) {
      this.updateAlignment();
    }
  }

  updateAlignment() {
    this.setAttribute('alignment', this.alignment);
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

customElements.define('__PREFIX__-__COMPONENT__-footer', CapsuleCardFooter);