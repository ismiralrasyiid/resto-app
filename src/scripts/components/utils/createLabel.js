export default function createLabel({ text, htmlFor }) {
  const Label = document.createElement('label');
  Label.setAttribute('for', htmlFor);
  Label.innerText = text;

  return Label;
}
