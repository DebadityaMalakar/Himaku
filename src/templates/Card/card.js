import { LitElement, html } from '../../lit';

class CapsuleCard extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    elevated: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.variant = 'default';
    this.elevated = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'article');
    this.updateElevation();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    if (changedProperties.has('elevated')) {
      this.updateElevation();
    }
    
    if (changedProperties.has('variant')) {
      this.setAttribute('variant', this.variant);
    }
  }

  updateElevation() {
    if (this.elevated) {
      this.setAttribute('elevated', '');
    } else {
      this.removeAttribute('elevated');
    }
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('__PREFIX__-__COMPONENT__', CapsuleCard);