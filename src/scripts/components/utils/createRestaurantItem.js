import { FaLocationDot, FaStar } from '../Icons';

export default function createRestaurantItem({
  city,
  id,
  name,
  pictureId,
  rating,
  isNew,
}) {
  const RestaurantItemWrapper = document.createElement('a');
  RestaurantItemWrapper.setAttribute('href', `#/detail/${id}`);

  const RestaurantItem = document.createElement('article');
  RestaurantItem.setAttribute('id', id);

  const City = document.createElement('span');
  City.classList.add('city');
  City.setAttribute('aria-label', 'Kota');
  City.appendChild(FaLocationDot);
  City.innerHTML += city;

  const Name = document.createElement('h3');
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

  RestaurantItem.appendChild(Picture);
  RestaurantItem.appendChild(Name);
  RestaurantItem.appendChild(City);

  RestaurantItemWrapper.appendChild(RestaurantItem);

  return RestaurantItemWrapper;
}
