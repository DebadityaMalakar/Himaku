import { LitElement, html } from '../../lit';

class CapsuleSidebarHeader extends LitElement {
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

customElements.define('capsule-sidebar-header', CapsuleSidebarHeader);

