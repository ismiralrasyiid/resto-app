const FavoriteSection = document.createElement('section');
FavoriteSection.id = 'favoriteSection';
FavoriteSection.classList.add('restaurantSection');

const Heading = document.createElement('h2');
Heading.innerText = 'Daftar Restoran Favorit';
const Paragraph = document.createElement('p');
Paragraph.innerText = 'Tidak ada restoran favorit';

FavoriteSection.appendChild(Heading);
FavoriteSection.appendChild(Paragraph);

export default FavoriteSection;
