import { lottieConfig } from './LottieBackground.model';
import backgroundMoon from './images/Moon.png';
import backgroundStars from './images/Stars.png';
import backgroundRockLeft from './images/RockLeft.png';
import backgroundRockRight from './images/RockRight.png';
import './LottieBackground.styles.css';

const lottieWaves = import('../../../lottie/background/waves.json');
const lottieRelaxWoman = import('../../../lottie/background/relaxWoman.json');

class LottieBackground extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadAnimation();
  }

  render() {
    this.innerHTML = `
      <div id="lottieBackground">
        <div id="backgroundContainer">
          <img src="${backgroundMoon}" id="backgroundWavesMoon" alt="" />
          <img src="${backgroundStars}" id="backgroundWavesStars" alt="" />
          <img src="${backgroundRockLeft}" id="backgroundWavesRockLeft" alt="" />
          <img src="${backgroundRockRight}" id="backgroundWavesRockRight" alt="" />
          <div id="backgroundWaves"></div>
        </div>
        <div id="backgroundContainer">
          <div id="backgroundWoman"></div>
        </div>
      </div>
    `;
  }

  async loadAnimation() {
    const lottieWeb = await import('lottie-web');

    const [lottieWavesData, lottieRelaxWomanData] = await Promise.all([
      lottieWaves,
      lottieRelaxWoman
    ]);

    lottieWeb.loadAnimation({
      container: this.querySelector('#backgroundWaves'),
      animationData: lottieWavesData,
      ...lottieConfig,
    });

    lottieWeb.loadAnimation({
      container: this.querySelector('#backgroundWoman'),
      animationData: lottieRelaxWomanData,
      ...lottieConfig,
    });
  }
}

customElements.define('lottie-background', LottieBackground);
