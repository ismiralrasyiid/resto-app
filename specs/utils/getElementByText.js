export default function getElementByText({ tag, text, index = 0 }) {
  const filteredElement = Array.prototype.slice.call(document.getElementsByTagName(tag))
    .filter((element) => element.innerText.includes(text));
  return filteredElement[index];
}
