class RegularLogo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
      <style>
        #logo {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 100;
        }
      </style>
      <div id="logo">
        <h1>${this.getAttribute('text') || 'Logo'}</h1>
      </div>
    `;
    }
}

customElements.define('regular-logo', RegularLogo);
export default RegularLogo;