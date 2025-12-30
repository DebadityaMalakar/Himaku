import { LitElement, html } from '../../lit';

class CapsuleSidebarFooter extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-sidebar-footer', CapsuleSidebarFooter);

