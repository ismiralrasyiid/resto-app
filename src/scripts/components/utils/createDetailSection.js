import { FaLocationDot, FaStar } from '../Icons';
import createFavoriteButton from './createFavoriteButton';

function createSection({ classList, heading, Content }) {
  const Section = document.createElement('section');
  Section.classList.add(classList);

  const Heading = document.createElement('h3');
  Heading.innerText = heading;

  Section.appendChild(Heading);
  Section.appendChild(Content);

  return Section;
}

function createList(items) {
  const ulElement = document.createElement('ul');
  items.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.innerText = item;
    ulElement.appendChild(liElement);
  });

  return ulElement;
}

function createReviews(items) {
  const Reviews = document.createElement('section');
  Reviews.classList.add('reviews');
  Reviews.setAttribute('aria-label', 'Reviews');

  const Heading = document.createElement('h3');
  Heading.innerText = 'Review Pelanggan';
  Reviews.appendChild(Heading);

  items.forEach(({ name, review, date }) => {
    const Item = document.createElement('article');

    const Name = document.createElement('h4');
    Name.innerText = name;
    const Date = document.createElement('p');
    Date.innerText = date;
    const Review = document.createElement('p');
    Review.innerText = review;

    Item.appendChild(Name);
    Item.appendChild(Date);
    Item.appendChild(Review);

    Reviews.appendChild(Item);
  });

  return Reviews;
}

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
  const Categories = createList(categoryNames);
  Categories.classList.add('categories');
  Categories.setAttribute('aria-label', 'Categories');

  const foodNames = foods.map((food) => food.name);
  const FoodList = createList(foodNames);
  const Foods = createSection({
    classList: 'listSection',
    heading: 'Daftar Makanan',
    Content: FoodList,
  });

  const drinkNames = drinks.map((drink) => drink.name);
  const DrinkList = createList(drinkNames);
  const Drinks = createSection({
    classList: 'listSection',
    heading: 'Daftar Minuman',
    Content: DrinkList,
  });

  const FavoriteButtonContainer = document.createElement('div');
  FavoriteButtonContainer.id = 'favoriteButtonContainer';
  const FavoriteButton = await createFavoriteButton(restaurant);
  FavoriteButtonContainer.appendChild(FavoriteButton);

  const Reviews = createReviews(customerReviews);

  DetailSection.appendChild(Picture);
  DetailSection.appendChild(Name);
  DetailSection.appendChild(Categories);
  DetailSection.appendChild(City);
  DetailSection.appendChild(Description);
  DetailSection.appendChild(Foods);
  DetailSection.appendChild(Drinks);
  DetailSection.appendChild(FavoriteButtonContainer);
  DetailSection.appendChild(Reviews);

  return DetailSection;
}
