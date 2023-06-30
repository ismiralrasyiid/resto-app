import 'regenerator-runtime';
import '../styles/reset.css';
import 'toastify-js/src/toastify.css';
import '../styles/global.css';
import '../styles/header.css';
import '../styles/heroSection.css';
import '../styles/restaurantSection.css';
import '../styles/askReviewSection.css';
import '../styles/footer.css';
import App from './App';
import registerSW from './sw/registerSW';

const rootContainer = document.getElementById('root');

window.addEventListener('load', () => {
  rootContainer.appendChild(App.Page());
  registerSW();
});

window.addEventListener('hashchange', () => {
  rootContainer.innerHTML = null;
  rootContainer.appendChild(App.Page());
});
