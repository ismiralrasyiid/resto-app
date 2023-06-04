import HeroImage from './HeroImage';
import createAnchor from './utils/createAnchor';

const HeroSection = document.createElement('section');
HeroSection.classList.add('heroSection');

const Heading = document.createElement('h2');
Heading.innerText = 'Tempatmu melihat ulasan beragam restoran dari seluruh Indonesia';
const Paragraph = document.createElement('p');
Paragraph.innerText = 'Kami selalu memberikan rating dan ulasan secara rinci untuk memudahkan pilihan anda';
const CTA = createAnchor({ text: 'Lihat ulasannya sekarang!', link: '#restaurantSection' });

HeroSection.appendChild(HeroImage);
HeroSection.appendChild(Heading);
HeroSection.appendChild(Paragraph);
HeroSection.appendChild(CTA);

export default HeroSection;
