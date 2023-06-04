import randomParagraph from 'random-paragraph';
import Toastify from 'toastify-js';
import ProgressBar from 'progressbar.js';
import createInput from './utils/createInput';
import createLabel from './utils/createLabel';
import createRestaurantItem from './utils/createRestaurantItem';

const AskReviewForm = document.createElement('form');

const NameContainer = document.createElement('div');
const NameLabel = createLabel({ text: 'Nama Restoran', htmlFor: 'reviewName' });
const NameInput = createInput({ type: 'text', id: 'reviewName' });
NameContainer.appendChild(NameLabel);
NameContainer.appendChild(NameInput);

const CategoryContainer = document.createElement('div');
const CategoryLabel = createLabel({ text: 'Kategori Makanan', htmlFor: 'reviewCategory' });
const CategoryInput = createInput({ type: 'text', id: 'reviewCategory' });
CategoryContainer.appendChild(CategoryLabel);
CategoryContainer.appendChild(CategoryInput);

const AddressContainer = document.createElement('div');
const AddressLabel = createLabel({ text: 'Alamat', htmlFor: 'reviewAddress' });
const AddressInput = createInput({ type: 'text', id: 'reviewAddress' });
AddressContainer.appendChild(AddressLabel);
AddressContainer.appendChild(AddressInput);
AskReviewForm.appendChild(AddressContainer);

const CityContainer = document.createElement('div');
const CityLabel = createLabel({ text: 'Kota', htmlFor: 'reviewCity' });
const CityInput = createInput({ type: 'text', id: 'reviewCity' });
CityContainer.appendChild(CityLabel);
CityContainer.appendChild(CityInput);

const Submit = document.createElement('button');
Submit.innerText = 'Ajukan';

AskReviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const LineProgressBar = new ProgressBar.Line('#root', {
    color: 'brown',
    duration: 2000,
    svgStyle: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
    },
  });
  try {
    LineProgressBar.animate(1);
    const description = randomParagraph({ min: 7, max: 10 });
    const responsePicture = await fetch(`https://source.unsplash.com/random/?${encodeURI(event.target[1].value)}`);
    const newReview = {
      id: +new Date(),
      name: event.target[0].value,
      city: event.target[3].value,
      pictureId: responsePicture.url,
      rating: (3 + Math.random() * 2).toFixed(1),
      description,
      isNew: true,
    };

    const RestaurantItem = createRestaurantItem(newReview);
    const ListItem = document.createElement('li');
    const RestaurantList = document.getElementById('restaurantList');

    ListItem.appendChild(RestaurantItem);
    RestaurantList.appendChild(ListItem);
    LineProgressBar.destroy();
    Toastify({
      text: 'Selamat! Permintaan anda dirilis!',
      style: {
        background: 'linear-gradient(to right, rgb(0, 170, 0), rgb(0, 170, 80))',
      },
    }).showToast();
  } catch {
    LineProgressBar.destroy();
    Toastify({
      text: 'Maaf permintaan anda gagal!',
      style: {
        background: 'darkred',
      },
    }).showToast();
  }
});

AskReviewForm.appendChild(NameContainer);
AskReviewForm.appendChild(CategoryContainer);
AskReviewForm.appendChild(AddressContainer);
AskReviewForm.appendChild(CityContainer);
AskReviewForm.appendChild(Submit);

export default AskReviewForm;
