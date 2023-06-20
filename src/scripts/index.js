import 'regenerator-runtime';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import '../styles/reset.css';
import 'toastify-js/src/toastify.css';
import '../styles/global.css';
import '../styles/header.css';
import '../styles/heroSection.css';
import '../styles/restaurantSection.css';
import '../styles/askReviewSection.css';
import '../styles/footer.css';
import ToTopNavigation from './components/ToTopNavigation';
import SkipToContentNavigation from './components/SkipToContentNavigation';

const rootContainer = document.getElementById('root');

rootContainer.appendChild(SkipToContentNavigation);
rootContainer.appendChild(Header);
rootContainer.appendChild(MainContent);
rootContainer.appendChild(Footer);
rootContainer.appendChild(ToTopNavigation);
