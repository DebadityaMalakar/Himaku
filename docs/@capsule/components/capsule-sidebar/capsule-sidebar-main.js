import { LitElement, html } from '../../lit';

class CapsuleSidebarMain extends LitElement {
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

customElements.define('capsule-sidebar-main', CapsuleSidebarMain);

