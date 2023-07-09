const { default: IDB } = require('../src/public/data/IDB');
const { default: createFavoriteButton } = require('../src/scripts/components/utils/createFavoriteButton');
const { default: getElementByText } = require('./utils/getElementByText');
const { default: stubRestaurantDetail } = require('./utils/stubRestaurantDetail');

describe('Removing restaurant from favorite', () => {
  const restaurant = stubRestaurantDetail();
  const prepareFavoriteButton = async (therestaurant) => {
    const FavoriteButtonContainer = document.createElement('div');
    FavoriteButtonContainer.id = 'favoriteButtonContainer';

    try {
      await IDB.FavoriteRestaurant.put(therestaurant);
    } catch {
      console.log('gagal di testing env [Removing restaurant from favorite]!');
    }
    const Button = await createFavoriteButton(therestaurant);

    document.body.appendChild(FavoriteButtonContainer);
    FavoriteButtonContainer.appendChild(Button);
  };

  afterEach(async () => {
    try {
      await IDB.FavoriteRestaurant.delete(restaurant.id);
    } catch {
      console.log('film sudah dihapus');
    }

    document.body.innerHTML = null;
  });

  it('should show the remove from favorite button when the restaurant has been favorited before', async () => {
    await prepareFavoriteButton(restaurant);

    const AddToFavoriteButton = getElementByText({ text: 'Hapus dari Favorit', tag: 'button' });

    expect(AddToFavoriteButton).toBeTruthy();
  });

  it('should not show the add to favorite button when the restaurant has been favorited before', async () => {
    await prepareFavoriteButton(restaurant);

    const DeleteFromFavoriteButton = getElementByText({ text: 'Tambahkan ke Favorit', tag: 'button' });

    expect(DeleteFromFavoriteButton).toBeFalsy();
  });

  it('should be able to remove favorited restaurant', async () => {
    await prepareFavoriteButton(restaurant);

    const AddToFavoriteButton = getElementByText({ text: 'Hapus dari Favorit', tag: 'button' });
    AddToFavoriteButton.dispatchEvent(new Event('click'));
    const AllFavoritedRestaurant = await IDB.FavoriteRestaurant.getAll();

    expect(AllFavoritedRestaurant).toEqual([]);
  });

  it('should not throw error if the restaurant is already removed from the list', async () => {
    await prepareFavoriteButton(restaurant);

    const AddToFavoriteButton = getElementByText({ text: 'Hapus dari Favorit', tag: 'button' });
    await IDB.FavoriteRestaurant.delete(restaurant.id);
    AddToFavoriteButton.dispatchEvent(new Event('click'));
    const AllFavoritedRestaurant = await IDB.FavoriteRestaurant.getAll();

    expect(AllFavoritedRestaurant).toEqual([]);
  });
});
