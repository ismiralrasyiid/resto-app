import * as WorkboxWindow from 'workbox-window';
import Notification from '../components/Notification';

const registerSW = async () => {
  if (!('serviceWorker' in navigator)) {
    Notification.failure('Browser tidak mendukung Service Worker!');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    if (error instanceof TypeError) {
      Notification.failure('Service Worker disetting hanya pada mode production');
      return;
    }
    Notification.failure('Registrasi Service Worker gagal!');
  }
};

export default registerSW;
