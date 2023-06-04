export default function createInput({ type, id }) {
  const Input = document.createElement('input');
  Input.id = id;
  Input.setAttribute('type', type);
  Input.setAttribute('required', true);

  return Input;
}
