import { LitElement, html } from '../../lit';

class CapsuleAlertDescription extends LitElement {
  static properties = {
    theme: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.theme = 'default';
  }

  connectedCallback() {
    super.connectedCallback();
    
    // Inherit theme from parent or document
    this._inheritTheme();
    
    // Set ARIA attributes for accessibility
    this.setAttribute('role', 'paragraph');
  }

  _inheritTheme() {
    // Try to inherit theme from parent alert
    const parentAlert = this.closest(`${this.tagName.replace('-description', '')}`);
    if (parentAlert && parentAlert.hasAttribute('theme')) {
      this.theme = parentAlert.getAttribute('theme');
    } else if (document.documentElement.hasAttribute('theme')) {
      // Fall back to document theme
      this.theme = document.documentElement.getAttribute('theme');
    }
    
    // Set theme attribute for CSS targeting
    this.setAttribute('theme', this.theme);
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    if (changedProperties.has('theme')) {
      this.setAttribute('theme', this.theme);
    }
  }

  createRenderRoot() {
    // Use shadow DOM but inherit CSS properties
    return super.createRenderRoot();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define(
  'capsule-alert-description',
  CapsuleAlertDescription
);