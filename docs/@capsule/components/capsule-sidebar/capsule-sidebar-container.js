import { LitElement, html } from '../../lit';

class CapsuleSidebarContainer extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    defaultOpen: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.open = true;
    this.defaultOpen = true;
    this._isMobile = false;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._checkMobile();
    this._loadState();
    this._attachListeners();
    this._updateState();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachListeners();
  }

  updated(changedProperties) {
    if (changedProperties.has('open')) {
      this._updateState();
      this._saveState();
      this._dispatchChange();
    }
  }

  _checkMobile() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    this._isMobile = mediaQuery.matches;
    this._handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', this._handleMediaChange.bind(this));
  }

  _handleMediaChange(mediaQuery) {
    this._isMobile = mediaQuery.matches;
    this._updateState();
  }

  _loadState() {
    if (this.defaultOpen !== undefined) {
      this.open = this.defaultOpen;
    } else {
      const saved = localStorage.getItem('capsule-sidebar-state');
      if (saved !== null) {
        this.open = saved === 'true';
      }
    }
  }

  _saveState() {
    localStorage.setItem('capsule-sidebar-state', String(this.open));
  }

  _attachListeners() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  _detachListeners() {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'b') {
      event.preventDefault();
      this.toggle();
    }
  };

  _updateState() {
    const state = this.open ? 'expanded' : 'collapsed';
    this.setAttribute('data-state', state);
    this.style.setProperty('--sidebar-open', this.open ? '1' : '0');
    
    // Update all sidebar children
    const tagName = this.tagName.toLowerCase();
    if (tagName.includes('container')) {
      const sidebarTagName = tagName.replace('-container', '');
      const sidebars = this.querySelectorAll(sidebarTagName);
      sidebars.forEach((sidebar) => {
        if (sidebar && sidebar.setAttribute) {
          sidebar.setAttribute('data-state', state);
          const collapsible = sidebar.collapsible || sidebar.getAttribute('collapsible') || '';
          sidebar.setAttribute('data-collapsible', state === 'collapsed' ? collapsible : '');
        }
      });
    }
  }

  _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('sidebar-change', {
        bubbles: true,
        detail: {
          open: this.open,
          state: this.open ? 'expanded' : 'collapsed',
        },
      })
    );
  }

  toggle() {
    this.open = !this.open;
  }

  setOpen(value) {
    this.open = value;
  }

  getState() {
    return this.open ? 'expanded' : 'collapsed';
  }

  getIsMobile() {
    return this._isMobile;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-sidebar-container', CapsuleSidebarContainer);

