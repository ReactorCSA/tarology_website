import appstore from './svg/Appstore.svg';
import './DownloadButtons.styles.css';

class DownloadButtons extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="buttonContainer">
        <a>
          <img src="${appstore}" id="logo" alt="" />
        </a>
      </div>
    `;
  }
}

customElements.define('download-buttons', DownloadButtons);
