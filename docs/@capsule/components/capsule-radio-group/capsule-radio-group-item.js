import { LitElement, html } from '../../lit';

class CapsuleRadioGroupItem extends LitElement {
  static formAssociated = true;

  static properties = {
    value: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    checked: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._internals = this.attachInternals();
    this.value = '';
    this.disabled = false;
    this.checked = false;
  }

  createRenderRoot() {
    return super.createRenderRoot();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
    this._syncWithGroup();
    this.setAttribute('tabindex', this.checked ? '0' : '-1');
    this._updateAria();
    this._attachListeners();
  }

  _getGroup() {
    const tagName = this.tagName.toLowerCase();
    if (!tagName.endsWith('-item')) {
      return null;
    }
    const groupTagName = tagName.slice(0, -5); // Remove '-item'
    return this.closest(groupTagName);
  }

  _syncWithGroup() {
    const group = this._getGroup();
    if (group) {
      // Sync checked state
      if (group.value != null) {
        this.checked = this.value === group.value;
      }
      // Sync disabled state
      if (group.disabled != null) {
        this.disabled = group.disabled;
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachListeners();
  }

  updated(changedProperties) {
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      this.setAttribute('tabindex', this.checked ? '0' : '-1');
      this._updateFormValue();
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      this.setAttribute(
        'tabindex',
        this.disabled ? '-1' : this.checked ? '0' : '-1'
      );
    }
  }

  _attachListeners() {
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  _detachListeners() {
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this._select();
  }

  _handleKeyDown(event) {
    if (this.disabled) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._select();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this._selectNext();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this._selectPrevious();
    }
  }

  _select() {
    if (this.checked || this.disabled) return;

    const group = this._getGroup();
    if (group && typeof group.setValue === 'function') {
      group.setValue(this.value);
    } else {
      this.checked = true;
      this._dispatchChange();
    }
  }

  _selectNext() {
    const items = this._getItems();
    if (items.length === 0) return;

    const currentIndex = items.indexOf(this);
    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];
    if (nextItem) {
      nextItem._select();
      nextItem.focus();
    }
  }

  _selectPrevious() {
    const items = this._getItems();
    if (items.length === 0) return;

    const currentIndex = items.indexOf(this);
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    const previousItem = items[previousIndex];
    if (previousItem) {
      previousItem._select();
      previousItem.focus();
    }
  }

  _getItems() {
    const group = this._getGroup();
    if (!group) return [this];

    const itemTagName = this.tagName.toLowerCase();
    return Array.from(group.querySelectorAll(itemTagName)).filter(
      (item) => item && !item.disabled
    );
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

  _updateAria() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  _updateFormValue() {
    if (this._internals) {
      this._internals.setFormValue(this.checked ? this.value : null);
    }
  }

  setChecked(checked) {
    this.checked = checked;
  }

  setDisabled(disabled) {
    this.disabled = disabled;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('capsule-radio-group-item', CapsuleRadioGroupItem);
