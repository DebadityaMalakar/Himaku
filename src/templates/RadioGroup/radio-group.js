import { LitElement, html } from '../../lit';

class CapsuleRadioGroup extends LitElement {
  static formAssociated = true;

  static properties = {
    value: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._internals = this.attachInternals();
    this.value = '';
    this.disabled = false;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radiogroup');
    this._updateFormValue();
    this._attachListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachListeners();
  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      this._updateFormValue();
      this._updateItems();
      this._dispatchChange();
    }
    if (changedProperties.has('disabled')) {
      this._updateItems();
    }
  }

  _attachListeners() {
    this.addEventListener('change', this._handleItemChange);
  }

  _detachListeners() {
    this.removeEventListener('change', this._handleItemChange);
  }

  _handleItemChange(event) {
    const item = event.target;
    if (
      item &&
      item.tagName &&
      item.tagName.toLowerCase().endsWith('-radio-group-item')
    ) {
      const newValue = item.value;
      if (newValue !== this.value) {
        this.value = newValue;
        this._updateItems();
        this._dispatchChange();
      }
    }
  }

  _updateItems() {
    const itemTagName = `${this.tagName.toLowerCase()}-item`;
    const items = this.querySelectorAll(itemTagName);
    items.forEach((item) => {
      if (item && typeof item.setChecked === 'function') {
        item.setChecked(item.value === this.value);
      }
      if (item && typeof item.setDisabled === 'function') {
        item.setDisabled(this.disabled);
      }
    });
  }

  _updateFormValue() {
    if (this._internals) {
      this._internals.setFormValue(this.value === '' ? null : this.value);
    }
  }

  _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: {
          value: this.value,
        },
      })
    );
  }

  setValue(value) {
    if (value !== this.value) {
      this.value = value;
      this._updateItems();
      this._dispatchChange();
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('__PREFIX__-__COMPONENT__', CapsuleRadioGroup);
