import API from '../../../public/data/API';
import { FaLocationDot, FaStar } from '../Icons';
import LineProgressBar from '../LineProgressBar';
import Notification from '../Notification';
import createFavoriteButton from './createFavoriteButton';
import detailSectionHelper from './detailSectionHelper';

export default async function createDetailSection(restaurant) {
  const {
    address,
    categories,
    city,
    customerReviews,
    description,
    id,
    menus: {
      foods,
      drinks,
    },
    name,
    pictureId,
    rating,
    isNew,
  } = restaurant;

  const DetailSection = document.createElement('section');
  DetailSection.id = id;
  DetailSection.classList.add('detailSection');

  const City = document.createElement('p');
  City.classList.add('city');
  City.setAttribute('aria-label', 'Kota');
  City.appendChild(FaLocationDot);
  if (address) {
    City.innerHTML += ` ${address}, `;
  }
  City.innerHTML += city;

  const Name = document.createElement('h2');
  Name.innerText = name;

  const Picture = document.createElement('img');
  Picture.setAttribute('src', `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`);
  Picture.setAttribute('alt', name);

  const Rating = document.createElement('span');
  Rating.classList.add('rating');
  Rating.setAttribute('aria-label', 'Rating');
  Rating.appendChild(FaStar);
  Rating.innerHTML += rating;
  Name.appendChild(Rating);

  if (isNew) {
    const IsNew = document.createElement('span');
    IsNew.classList.add('isNew');
    IsNew.setAttribute('aria-label', 'Baru!');
    IsNew.innerText = 'Baru!';
    Name.appendChild(IsNew);
  }

  const Description = document.createElement('p');
  Description.innerText = description;

  const categoryNames = categories.map((category) => category.name);
  const Categories = detailSectionHelper.createList(categoryNames);
  Categories.classList.add('categories');
  Categories.setAttribute('aria-label', 'Categories');

  const foodNames = foods.map((food) => food.name);
  const FoodList = detailSectionHelper.createList(foodNames);
  const Foods = detailSectionHelper.createSection({
    classList: 'listSection',
    heading: 'Daftar Makanan',
    Content: FoodList,
  });

  const drinkNames = drinks.map((drink) => drink.name);
  const DrinkList = detailSectionHelper.createList(drinkNames);
  const Drinks = detailSectionHelper.createSection({
    classList: 'listSection',
    heading: 'Daftar Minuman',
    Content: DrinkList,
  });

  const FavoriteButtonContainer = document.createElement('div');
  FavoriteButtonContainer.id = 'favoriteButtonContainer';
  const FavoriteButton = await createFavoriteButton(restaurant);
  FavoriteButtonContainer.appendChild(FavoriteButton);

  const Reviews = detailSectionHelper.createReviews(customerReviews);
  const ReviewForm = detailSectionHelper.createAddReviewForm(id);
  ReviewForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = {
      id,
      name: event.target[0].value,
      review: event.target[1].value,
    };
    try {
      LineProgressBar.animate(1);
      const response = await API.addReview(body);
      const newReview = detailSectionHelper.createReviewItem(response[response.length - 1]);
      Reviews.appendChild(newReview);
      Notification.success('Review ditambahkan!');
    } catch {
      Notification.failure('Data ini tidak diproses server!');
    } finally {
      LineProgressBar.set(0);
    }
  });

  DetailSection.appendChild(Picture);
  DetailSection.appendChild(Name);
  DetailSection.appendChild(Categories);
  DetailSection.appendChild(City);
  DetailSection.appendChild(Description);
  DetailSection.appendChild(Foods);
  DetailSection.appendChild(Drinks);
  DetailSection.appendChild(FavoriteButtonContainer);
  DetailSection.appendChild(Reviews);
  DetailSection.appendChild(ReviewForm);

  return DetailSection;
}
