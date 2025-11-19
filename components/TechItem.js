//techNames defined in data.js

class TechItem extends HTMLElement {

  static get observedAttributes() {
    return [
      'name',
      'size',
    ];
  }
  
  render() {
    const name = this.getAttribute('name') || '';
    const size = this.getAttribute('size') ||'24';
    this.innerHTML = `
      <div class="flex flex-col items-center gap-2">
        <svg-icon name="${name}" size="${size}"></svg-icon>
        <p class="text-center">${techNames[name]}</p>
      </div>
    `
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }
}

customElements.define('tech-item', TechItem);
