import { LitElement, html } from '../../lit';

class CapsuleIcon extends LitElement {
  static properties = {
    name: { type: String, reflect: true },
    size: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.size = '1em';
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'img');
    this.setAttribute('aria-hidden', 'true');
  }

  updated(changedProperties) {
    if (changedProperties.has('name')) {
      this._loadIcon();
    }
    if (changedProperties.has('size')) {
      this._updateSize();
    }
  }

  firstUpdated() {
    this._loadIcon();
  }

  async _loadIcon() {
    if (!this.name) {
      this.innerHTML = '';
      return;
    }

    try {
      const iconData = await this._fetchIcon(this.name);
      this._renderIcon(iconData);
    } catch (error) {
      console.error(`Failed to load icon: ${this.name}`, error);
      this.innerHTML = '';
    }
  }

  _renderIcon(iconData) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', iconData.viewBox);
    svg.setAttribute('fill', 'currentColor');
    svg.innerHTML = iconData.innerHTML;

    this.innerHTML = '';
    this.appendChild(svg);
    this._updateSize();
  }

  _updateSize() {
    const svg = this.querySelector('svg');
    if (svg) {
      if (this.size && !['xs', 'sm', 'md', 'lg', 'xl'].includes(this.size)) {
        svg.style.width = this.size;
        svg.style.height = this.size;
      } else {
        svg.style.width = '';
        svg.style.height = '';
      }
    }
  }

  async _fetchIcon(iconName) {
    const url = `https://api.iconify.design/${iconName}.svg`;
    return await this._fetchAndParseSvg(url);
  }

  async _fetchAndParseSvg(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch icon: ${response.statusText}`);
    }

    const svgText = await response.text();
    return this._parseSvg(svgText);
  }

  _parseSvg(svgText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    if (!svg) {
      throw new Error('Invalid SVG format');
    }

    const viewBox = svg.getAttribute('viewBox') || '0 0 24 24';
    const innerHTML = svg.innerHTML;

    return { viewBox, innerHTML };
  }

  render() {
    return html``;
  }
}

customElements.define('capsule-icon', CapsuleIcon);
