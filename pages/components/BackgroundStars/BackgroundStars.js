import backgroundStars from './images/Stars.png';
import './BackgroundStars.styles.css';

class BackgroundStars extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="backgroundGradient">
        <img src="${backgroundStars}" id="backgroundStars" alt="" />
      </div>
    `;
  }
}

customElements.define('background-stars', BackgroundStars);
