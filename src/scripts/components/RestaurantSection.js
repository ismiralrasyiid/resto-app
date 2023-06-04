import data from '../../public/data/DATA.json';
import createListElements from './utils/createListElements';
import createRestaurantItem from './utils/createRestaurantItem';

const { restaurants } = data;
const RestaurantSection = document.createElement('section');
RestaurantSection.id = 'restaurantSection';
RestaurantSection.classList.add('restaurantSection');

const Heading = document.createElement('h2');
Heading.innerText = 'Daftar Restoran';

const RestaurantItems = restaurants.map((restaurant) => createRestaurantItem(restaurant));
const RestaurantList = createListElements(...RestaurantItems);
RestaurantList.id = 'restaurantList';

RestaurantSection.appendChild(Heading);
RestaurantSection.appendChild(RestaurantList);

export default RestaurantSection;
