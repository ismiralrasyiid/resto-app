import createInput from './createInput';
import createLabel from './createLabel';

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

function createReviewItem(item) {
  const Item = document.createElement('article');

  const Name = document.createElement('h4');
  Name.innerText = item.name;
  const Date = document.createElement('p');
  Date.innerText = item.date;
  const Review = document.createElement('p');
  Review.innerText = item.review;

  Item.appendChild(Name);
  Item.appendChild(Date);
  Item.appendChild(Review);

  return Item;
}

function createReviews(items) {
  const Reviews = document.createElement('section');
  Reviews.classList.add('reviews');
  Reviews.setAttribute('aria-label', 'Reviews');

  const Heading = document.createElement('h3');
  Heading.innerText = 'Review Pelanggan';
  Reviews.appendChild(Heading);

  items.forEach((item) => {
    const Item = createReviewItem(item);
    Reviews.appendChild(Item);
  });

  return Reviews;
}

function createAddReviewForm() {
  const Form = document.createElement('form');

  const Heading = document.createElement('h3');
  Heading.innerText = 'Beri review';

  const NameContainer = document.createElement('div');
  const NameLabel = createLabel({ text: 'Nama', htmlFor: 'reviewerName' });
  const NameInput = createInput({ type: 'text', id: 'reviewerName' });
  NameContainer.appendChild(NameLabel);
  NameContainer.appendChild(NameInput);

  const TextContainer = document.createElement('div');
  const TextLabel = createLabel({ text: 'Review', htmlFor: 'reviewText' });
  const TextInput = createInput({ type: 'text', id: 'reviewText' });
  TextContainer.appendChild(TextLabel);
  TextContainer.appendChild(TextInput);

  const Submit = document.createElement('button');
  Submit.innerText = 'Kirim';

  Form.appendChild(Heading);
  Form.appendChild(NameContainer);
  Form.appendChild(TextContainer);
  Form.appendChild(Submit);

  return Form;
}

export default {
  createSection,
  createList,
  createReviewItem,
  createReviews,
  createAddReviewForm,
};
