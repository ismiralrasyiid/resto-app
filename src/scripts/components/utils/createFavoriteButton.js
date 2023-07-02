import IDB from '../../../public/data/IDB';

const utils = {
  async renderButton(restaurant) {
    const isFavorited = !!(await IDB.FavoriteRestaurant.get(restaurant.id));
    if (isFavorited) return this.renderDeleteFromFavorite(restaurant);
    return this.renderAddToFavorite(restaurant);
  },

  renderAddToFavorite(restaurant) {
    const Button = document.createElement('button');
    Button.innerText = 'Tambahkan ke Favorit';
    Button.addEventListener('click', async () => {
      await IDB.FavoriteRestaurant.put(restaurant);
      await this.reRenderButton(restaurant);
    });

    return Button;
  },

  renderDeleteFromFavorite(restaurant) {
    const Button = document.createElement('button');
    Button.innerText = 'Hapus dari Favorit';
    Button.addEventListener('click', async () => {
      await IDB.FavoriteRestaurant.delete(restaurant.id);
      await this.reRenderButton(restaurant);
    });

    return Button;
  },

  async reRenderButton(restaurant) {
    const Container = document.getElementById('favoriteButtonContainer');
    Container.innerHTML = '';
    Container.appendChild(await this.renderButton(restaurant));
  },
};

export default async function createFavoriteButton(restaurant) {
  const Button = await utils.renderButton(restaurant);
  return Button;
}
