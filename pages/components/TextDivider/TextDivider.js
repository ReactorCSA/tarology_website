import dividerStick from './images/DidiverStick.png';
import './TextDivider.styles.css';

class TextDivider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="dividerContainer">
        <img src="${dividerStick}" id="dividerStickLeft" alt="" />
        <h3>&</h3>
        <img src="${dividerStick}" id="dividerStickRight" alt="" />
      </div>
    `;
  }
}

customElements.define('text-divider', TextDivider);
