document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('answer');
  const text = document.getElementById('theanswer');
  if (!button) {
    console.warn('Toggle button not found: #answer');
    return;
  }
  if (!text) {
    console.warn('Target element not found: #theanswer');
    return;
  }
  if (!button.hasAttribute('aria-expanded')) {
    button.setAttribute('aria-expanded', 'false');
  }
  function handleClick() {
    const isShown = text.classList.toggle('show');
    button.setAttribute('aria-expanded', String(isShown));
  }
  button.addEventListener('click', handleClick);
});
