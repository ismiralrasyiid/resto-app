const RestaurantSection = document.createElement('section');
RestaurantSection.id = 'restaurantSection';
RestaurantSection.classList.add('restaurantSection');

const Heading = document.createElement('h2');
Heading.innerText = 'Daftar Restoran';
const Paragraph = document.createElement('p');
Paragraph.innerText = 'Tidak ada daftar restoran';

RestaurantSection.appendChild(Heading);
RestaurantSection.appendChild(Paragraph);

export default RestaurantSection;
