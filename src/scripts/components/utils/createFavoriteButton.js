import IDB from '../../../public/data/IDB';
import Notification from '../Notification';

const utils = {
  async renderButton(restaurant) {
    try {
      const isFavorited = !!(await IDB.FavoriteRestaurant.get(restaurant.id));
      if (isFavorited) return this.renderDeleteFromFavorite(restaurant);
    } catch {
      Notification.failure();
    }
    return this.renderAddToFavorite(restaurant);
  },

  renderAddToFavorite(restaurant) {
    const Button = document.createElement('button');
    Button.innerText = 'Tambahkan ke Favorit';
    Button.addEventListener('click', async () => {
      try {
        await IDB.FavoriteRestaurant.put(restaurant);
        Notification.success('Berhasil ditambahkan ke favorit');
      } catch {
        Notification.failure();
      }
      await this.reRenderButton(restaurant);
    });

    return Button;
  },

  renderDeleteFromFavorite(restaurant) {
    const Button = document.createElement('button');
    Button.innerText = 'Hapus dari Favorit';
    Button.addEventListener('click', async () => {
      try {
        await IDB.FavoriteRestaurant.delete(restaurant.id);
        Notification.success('Berhasil dihapus dari favorit');
      } catch {
        Notification.failure();
      }
      await this.reRenderButton(restaurant);
    });

    return Button;
  },

  async reRenderButton(restaurant) {
    const Container = document.getElementById('favoriteButtonContainer');
    Container.replaceChild(await this.renderButton(restaurant), Container.children[0]);
  },
};

export default async function createFavoriteButton(restaurant) {
  const Button = await utils.renderButton(restaurant);
  return Button;
}
