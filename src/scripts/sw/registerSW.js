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
    Notification.success('Service Worker terdaftar!');
  } catch (error) {
    Notification.failure('Registrasi Service Worker gagal', error);
  }
};

export default registerSW;
