import AskReviewForm from './AskReviewForm';

const AskReviewSection = document.createElement('section');
AskReviewSection.id = 'askReviewSection';
AskReviewSection.classList.add('askReviewSection');

const Heading = document.createElement('h2');
Heading.innerText = 'Ajukan Ulasan';

const Paragraph1 = document.createElement('p');
Paragraph1.innerText = 'Mau restoran favorit atau milik anda kami ulas secara gratis?';
const Paragraph2 = document.createElement('p');
Paragraph2.innerText = 'Tunggu apalagi? Caranya mudah kok!';
const Paragraph3 = document.createElement('p');
Paragraph3.innerText = 'Cukup isi form di bawah dan akan kami ulas dalam sekejap mata!';

AskReviewSection.appendChild(Heading);
AskReviewSection.appendChild(Paragraph1);
AskReviewSection.appendChild(Paragraph2);
AskReviewSection.appendChild(Paragraph3);
AskReviewSection.appendChild(AskReviewForm);

export default AskReviewSection;
