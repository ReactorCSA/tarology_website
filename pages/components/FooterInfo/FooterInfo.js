import './FooterInfo.styles.css';

class FooterInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-info">
        <a>hello@tarology.me</a>
        <div class="docs">
          <a href="privacy.html">Privacy</a>
          <a>✦</a>
          <a href="terms.html">Terms</a>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-info', FooterInfo);
