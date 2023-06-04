export default function createListElements(...anchorElements) {
  const ulElement = document.createElement('ul');
  anchorElements.forEach((anchorElement) => {
    const liElement = document.createElement('li');
    liElement.appendChild(anchorElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
}
