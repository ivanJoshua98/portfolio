//techNames defined in data.js

class ProjectCard extends HTMLElement {

  static get observedAttributes() {
    return [
      'image-url',
      'data-alt',
      'title',
      'description',
      'technologies',
      'code-url',
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render () {
    const imageURL = this.getAttribute('image-url') || '#';
    const dataAlt = this.getAttribute('data-alt') || '';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const technologies = JSON.parse(this.getAttribute('technologies') || '[]');
    const codeURL = this.getAttribute('code-url') || '#';

    this.innerHTML = `
      <article class="h-full">
        <div class="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-lg h-full bg-white dark:bg-[#1C2127]">
          <div class="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="${dataAlt}" style='background-image: url("${imageURL}");'>
          </div>
          <div class="flex w-full grow flex-col items-stretch justify-center gap-1 p-4">
            <p class="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">${title}</p>
            <p class="flex-1 text-zinc-600 dark:text-[#9dabb9] text-base font-normal leading-normal pt-1 pb-3">${description}</p>
            <!-- Chips -->
            <div class="flex gap-2 p-0 flex-wrap pb-3">
              ${technologies.map( t => `
                  <div class="flex pt-px pb-px shrink-0 items-center justify-center gap-x-2 rounded bg-primary/20 dark:bg-[#283039] px-2">
                    <svg-icon name="${t}" size="16"></svg-icon>
                    <p class="text-primary dark:text-white text-xs leading-normal">${techNames[t]}</p>
                  </div>`
              ).join('')}
            </div>
            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row items-stretch gap-3 justify-center pt-2 border-t border-black/10 dark:border-white/10">
              <a href="${codeURL}" target="_blank" rel="noopener noreferrer" class="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-2 bg-transparent text-zinc-900 dark:text-white hover:bg-primary transition-colors border border-zinc-300 dark:border-zinc-700 gap-2 text-sm font-bold leading-normal tracking-[0.015em]">
                <svg-icon name="code"></svg-icon>
                <span class="truncate">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("project-card", ProjectCard);