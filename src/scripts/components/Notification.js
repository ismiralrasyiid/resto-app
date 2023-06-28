import Toastify from 'toastify-js';

const media = window.matchMedia('(min-width: 1350px)');
const getStyle = (background) => {
  if (media.matches) {
    return {
      background,
      right: 'calc((100vw / 2) - 675px)',
    };
  }
  return {
    background,
  };
};

const offset = {
  x: 17,
  y: 65,
};

const Notification = {
  success(text = 'Selamat! Permintaan anda berhasil!') {
    Toastify({
      text,
      offset,
      style: getStyle('linear-gradient(to right, rgb(0, 170, 0), rgb(0, 170, 80))'),
    }).showToast();
  },
  failure(text = 'Maaf permintaan anda gagal!') {
    Toastify({
      text,
      offset,
      style: getStyle('darkred'),
    }).showToast();
  },
};

export default Notification;
