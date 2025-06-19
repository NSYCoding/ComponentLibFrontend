class NavLink extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        a {
          text-decoration: none;
          color: inherit;
        }
      </style>
      <a href="${this.getAttribute('href') || '#'}">
        <slot>${this.getAttribute('text') || 'link'}</slot>
      </a>
    `;
  }
}

customElements.define('nav-link', NavLink);
export default NavLink;