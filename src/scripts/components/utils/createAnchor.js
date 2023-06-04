export default function createAnchor({
  text, link, Icon, target = '_self',
}) {
  const anchor = document.createElement('a');
  if (link) anchor.setAttribute('href', link);
  if (Icon) anchor.appendChild(Icon);
  if (text) anchor.innerHTML += text;
  anchor.setAttribute('target', target);

  return anchor;
}
