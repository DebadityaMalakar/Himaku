import { LitElement, html } from '../../lit';

class CapsuleSidebarTrigger extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
    this._attachListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachListeners();
  }

  _attachListeners() {
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  _detachListeners() {
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleClick = () => {
    this._toggleSidebar();
  };

  _handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._toggleSidebar();
    }
  };

  _toggleSidebar() {
    const provider = this._getProvider();
    if (provider && typeof provider.toggle === 'function') {
      provider.toggle();
    }
  }

  _getProvider() {
    const tagName = this.tagName.toLowerCase();
    if (!tagName.includes('trigger')) {
      return null;
    }
    const providerTagName = tagName.replace('-trigger', '-provider');
    return this.closest(providerTagName);
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-sidebar-trigger', CapsuleSidebarTrigger);

