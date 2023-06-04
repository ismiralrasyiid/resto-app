export default function createIcon(...classList) {
  const Icon = document.createElement('i');
  Icon.classList.add(...classList);

  return Icon;
}
