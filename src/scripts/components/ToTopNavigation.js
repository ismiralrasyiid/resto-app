import { FaArrowUp } from './Icons';
import createAnchor from './utils/createAnchor';

const ToTopNavigation = createAnchor({
  Icon: FaArrowUp,
});
ToTopNavigation.setAttribute('aria-label', 'Kembali ke awal halaman');
ToTopNavigation.setAttribute('tabindex', 0);
ToTopNavigation.classList.add('toTop');
ToTopNavigation.addEventListener('click', () => {
  window.scroll(0, 0);
});
ToTopNavigation.addEventListener('keyup', (event) => {
  const isKeyPressed = event.code === 'Space' || event.code === 'Enter';
  if (isKeyPressed) {
    document.getElementsByTagName('a')[0].focus();
    window.scroll(0, 0);
  }
});

export default ToTopNavigation;
