import AskReviewSection from '../components/AskReviewSection';
import getAppShellWithContents from '../components/utils/getAppShellWithContents';

export default class AskReview extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Ask Review');

    getAppShellWithContents(AskReviewSection).forEach((element) => {
      this.appendChild(element);
    });
  }

  disconnectedCallback() {
    this.innerHTML = null;
  }
}
