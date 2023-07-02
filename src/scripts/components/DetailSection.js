const DetailSection = document.createElement('section');
DetailSection.classList.add('detailSection');

const Paragraph = document.createElement('p');
Paragraph.classList.add('null');
Paragraph.innerText = 'Tidak ada data restoran';

DetailSection.appendChild(Paragraph);

export default DetailSection;
