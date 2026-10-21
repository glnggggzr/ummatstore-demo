function explainDemo(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  window.ummatToast?.('Ini demo tampilan. Pencarian, login, kontak, dan transaksi tidak diproses.', 'info', 'Mode demo');
}
document.addEventListener('submit', explainDemo, true);
document.addEventListener('click', (event) => {
  if (event.target.closest('a[data-demo-only], button[type="submit"]')) explainDemo(event);
}, true);
