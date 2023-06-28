import getAppShellWithContents from '../components/utils/getAppShellWithContents';

export default class Detail extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Detail');

    const Heading = document.createElement('h2');
    Heading.innerText = 'DETAIL PAGE';
    getAppShellWithContents(Heading).forEach((element) => {
      this.appendChild(element);
    });
  }

  disconnectedCallback() {
    this.innerHTML = null;
  }
}
