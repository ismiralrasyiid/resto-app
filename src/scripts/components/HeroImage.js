import smallHeroImage from '../../public/images/heros/optimized/hero-image-small.jpg';
import mediumHeroImage from '../../public/images/heros/optimized/hero-image-medium.jpg';
import largeHeroImage from '../../public/images/heros/optimized/hero-image-large.jpg';

const ALT_TEXT = 'ByIsmir Hero Image';
const HeroImage = document.createElement('picture');
const InnerHTML = `
  <source media="(max-width: 480px)" srcset=${smallHeroImage} alt=${ALT_TEXT}>
  <source media="(max-width: 800px)" srcset=${mediumHeroImage} alt=${ALT_TEXT}>
  <img src=${largeHeroImage} alt=${ALT_TEXT}>
`;
HeroImage.innerHTML = InnerHTML;

export default HeroImage;
