const toast = document.querySelector('#toast');
let toastTimeout;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 4500);
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      notify('Server address copied. Public launch coming soon!');
    } catch {
      notify(`Copy this address: ${button.dataset.copy}`);
    }
  });
});
