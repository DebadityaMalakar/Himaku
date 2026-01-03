import { LitElement, html } from '../../lit';

class CapsuleCardImage extends LitElement {
  static properties = {
    ratio: { type: String, reflect: true },
    alt: { type: String, reflect: true },
    src: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.ratio = '16:9'; // Default ratio
    this.alt = '';
    this.src = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'img');
    if (this.alt) {
      this.setAttribute('aria-label', this.alt);
    }
    this.updateRatio();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    if (changedProperties.has('ratio')) {
      this.updateRatio();
    }
    
    if (changedProperties.has('alt') && this.alt) {
      this.setAttribute('aria-label', this.alt);
    }
  }

  updateRatio() {
    const ratios = {
      '1:1': '100%',
      '4:3': '75%',
      '16:9': '56.25%',
      '21:9': '42.86%',
      '3:2': '66.67%',
      'custom': 'auto'
    };
    
    const paddingBottom = ratios[this.ratio] || ratios['16:9'];
    this.style.paddingBottom = paddingBottom;
    this.style.position = 'relative';
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  render() {
    return html`
      <div class="image-container">
        ${this.src ? html`
          <img 
            src="${this.src}" 
            alt="${this.alt}" 
            loading="lazy"
            class="image-content"
          >
        ` : html`
          <slot></slot>
        `}
      </div>
    `;
  }
}

customElements.define('__PREFIX__-__COMPONENT__-image', CapsuleCardImage);