import randomParagraph from 'random-paragraph';
import Notification from './Notification';
import LineProgressBar from './LineProgressBar';
import createInput from './utils/createInput';
import createLabel from './utils/createLabel';
import IDB from '../../public/data/IDB';

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
  try {
    LineProgressBar.animate(1);

    const description = randomParagraph({ min: 7, max: 10 });
    const newReview = {
      id: String(+new Date()),
      name: event.target[0].value,
      city: event.target[3].value,
      pictureId: Math.round((Math.random() * 10)) + 10,
      rating: (3 + Math.random() * 2).toFixed(1),
      description,
      isNew: true,
      address: '',
      categories: [{ name: 'New' }],
      customerReviews: [{ name: 'New', review: 'New', date: 'New' }],
      menus: {
        foods: [{ name: 'New' }],
        drinks: [{ name: 'New' }],
      },
    };

    await IDB.NewRestaurant.put(newReview);
    Notification.success();
  } catch {
    Notification.failure();
  } finally {
    LineProgressBar.set(0);
  }
});

AskReviewForm.appendChild(NameContainer);
AskReviewForm.appendChild(CategoryContainer);
AskReviewForm.appendChild(AddressContainer);
AskReviewForm.appendChild(CityContainer);
AskReviewForm.appendChild(Submit);

export default AskReviewForm;
