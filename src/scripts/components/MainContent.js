import RestaurantSection from './RestaurantSection';
import HeroSection from './HeroSection';
import AskReviewSection from './AskReviewSection';

const MainContent = document.createElement('main');

MainContent.appendChild(HeroSection);
MainContent.appendChild(RestaurantSection);
MainContent.appendChild(AskReviewSection);

export default MainContent;
