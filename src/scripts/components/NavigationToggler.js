import { FaBars } from './Icons';

const NavigationToggler = document.createElement('button');
NavigationToggler.setAttribute('aria-label', 'Tampilkan Navigasi');
NavigationToggler.classList.add('navigation-toggler');

NavigationToggler.appendChild(FaBars);

export default NavigationToggler;
