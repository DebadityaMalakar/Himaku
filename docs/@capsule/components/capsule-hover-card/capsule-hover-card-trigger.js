import { LitElement, html } from '../../lit';

class CapsuleHoverCardTrigger extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'button');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-hover-card-trigger', CapsuleHoverCardTrigger);

