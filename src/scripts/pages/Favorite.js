import getAppShellWithContents from '../components/utils/getAppShellWithContents';

export default class Favorite extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Favorite');

    const Heading = document.createElement('h2');
    Heading.innerText = 'FAVORITE PAGE';
    getAppShellWithContents(Heading).forEach((element) => {
      this.appendChild(element);
    });
  }

  disconnectedCallback() {
    this.innerHTML = null;
  }
}
