export default function scrollbarwidth() {
  const div = document.createElement('div');
  div.style.overflow = 'scroll';
  document.body.appendChild(div);
  const scrollbarWidth = div.clientWidth - div.offsetWidth
  document.body.removeChild(div)
  return scrollbarWidth
}