import logo from './svg/Logo.svg';
import './TarologyLogo.styles.css';

class TarologyLogo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a id="logoContainer" href="/">
        <img src="${logo}" id="logo" alt="" />
      </a>
    `;
  }
}

customElements.define('tarology-logo', TarologyLogo);
