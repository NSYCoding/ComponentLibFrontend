class RegularNavbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
      <style>
        #regular-navbar {
          display: flex;
          justify-content: space-between;
          padding: 24px;
        }
        #regular-navbar a {
          text-decoration: none;
          margin-right: 15px;
        }
        #regular-navbar h1 {
            font-weight: 100;
        }
      </style>
      <nav id="regular-navbar">
        <div>
            <regular-logo text="NSY"></regular-logo>
        </div>
        <div>
            <nav-link text="Home" href="index.html"></nav-link>
            <nav-link text="About" href="#about">About</nav-link>
            <nav-link text="Contact" href="#contact">Contact</nav-link>
        </div>
    </nav>
    `;
    }
}

customElements.define('regular-navbar', RegularNavbar);
// Usage: <regular-navbar></regular-navbar>
export default RegularNavbar;