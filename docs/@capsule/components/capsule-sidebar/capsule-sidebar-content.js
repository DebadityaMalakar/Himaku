import { LitElement, html } from '../../lit';

class CapsuleSidebarContent extends LitElement {
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

customElements.define('capsule-sidebar-content', CapsuleSidebarContent);

