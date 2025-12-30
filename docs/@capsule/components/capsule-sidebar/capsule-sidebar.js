import { LitElement, html } from '../../lit';

class CapsuleSidebar extends LitElement {
  static properties = {
    side: { type: String, reflect: true },
    variant: { type: String, reflect: true },
    collapsible: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.side = 'left';
    this.variant = 'sidebar';
    this.collapsible = 'offcanvas';
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('data-side', this.side);
    this.setAttribute('data-variant', this.variant);
    this._syncWithProvider();
    this._attachListeners();
  }

  updated(changedProperties) {
    if (changedProperties.has('side')) {
      this.setAttribute('data-side', this.side);
    }
    if (changedProperties.has('variant')) {
      this.setAttribute('data-variant', this.variant);
    }
    if (changedProperties.has('collapsible')) {
      this._syncWithProvider();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachListeners();
  }

  _attachListeners() {
    document.addEventListener('sidebar-change', this._handleContainerChange);
  }

  _detachListeners() {
    document.removeEventListener('sidebar-change', this._handleContainerChange);
  }

  _handleContainerChange = () => {
    this._syncWithProvider();
  };

  _getContainer() {
    const tagName = this.tagName.toLowerCase();
    if (!tagName.includes('sidebar')) {
      return null;
    }
    const containerTagName = tagName.replace('sidebar', 'sidebar-container');
    return this.closest(containerTagName);
  }

  _syncWithProvider() {
    const container = this._getContainer();
    if (container) {
      const state = container.getState();
      this.setAttribute('data-state', state);
      this.setAttribute('data-collapsible', state === 'collapsed' ? this.collapsible : '');
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-sidebar', CapsuleSidebar);

