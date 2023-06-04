import createAnchor from './utils/createAnchor';
import createListElements from './utils/createListElements';
import NavigationToggler from './NavigationToggler';
import {
  FaBars,
  FaCancel,
  FaCircleInfo,
  FaHouse,
  FaPaperPlane,
  FaStar,
} from './Icons';

const NavigationBar = document.createElement('nav');

const HomeNavigation = createAnchor({ text: 'Beranda', link: '/', Icon: FaHouse });
HomeNavigation.id = 'homeNavigation';
const FavoriteNavigation = createAnchor({ text: 'Favorit', link: '#cpl5jpsnuqkkcowlqdz', Icon: FaStar });
const AskReviewNavigation = createAnchor({ text: 'Ajukan', link: '#askReviewSection', Icon: FaPaperPlane });
const AboutUsNavigation = createAnchor({
  text: 'Tentang Kami',
  link: 'https://ismiralrasyiid.github.io/',
  target: '_blank',
  Icon: FaCircleInfo,
});

[HomeNavigation, FavoriteNavigation, AskReviewNavigation, AboutUsNavigation].forEach((Nav) => {
  Nav.addEventListener('click', () => {
    if (NavigationBar.classList.contains('active')) {
      NavigationBar.classList.remove('active');
      NavigationToggler.replaceChild(FaBars, NavigationToggler.childNodes[0]);
      NavigationToggler.setAttribute('aria-label', 'Tampilkan Navigasi');
    }
  });
});

const NavigationList = createListElements(
  HomeNavigation,
  FavoriteNavigation,
  AskReviewNavigation,
  AboutUsNavigation,
);

NavigationToggler.addEventListener('click', () => {
  NavigationBar.classList.toggle('active');
  if (NavigationBar.classList.contains('active')) {
    NavigationToggler.replaceChild(FaCancel, NavigationToggler.childNodes[0]);
    NavigationToggler.setAttribute('aria-label', 'Tutup Navigasi');
  } else {
    NavigationToggler.replaceChild(FaBars, NavigationToggler.childNodes[0]);
    NavigationToggler.setAttribute('aria-label', 'Tampilkan Navigasi');
  }
});

NavigationBar.appendChild(NavigationToggler);
NavigationBar.appendChild(NavigationList);

export default NavigationBar;
