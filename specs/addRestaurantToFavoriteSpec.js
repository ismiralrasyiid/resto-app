const { default: IDB } = require('../src/public/data/IDB');
const { default: createFavoriteButton } = require('../src/scripts/components/utils/createFavoriteButton');
const { default: getElementByText } = require('./utils/getElementByText');
const { default: stubRestaurantDetail } = require('./utils/stubRestaurantDetail');

describe('Adding restaurant to favorite', () => {
  const restaurant = stubRestaurantDetail();
  const prepareFavoriteButton = async (restaurant) => {
    const FavoriteButtonContainer = document.createElement('div');
    FavoriteButtonContainer.id = 'favoriteButtonContainer';

    const Button = await createFavoriteButton(restaurant);

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

  it('should show the add to favorite button when the restaurant has not been favorited before', async () => {
    await prepareFavoriteButton(restaurant);
    
    const AddToFavoriteButton = getElementByText({ text: 'Tambahkan ke Favorit', tag: 'button' });

    expect(AddToFavoriteButton).toBeTruthy();
  });

  it('should not show the delete from favorite button when the restaurant has not been favorited before', async () => {
    await prepareFavoriteButton(restaurant);
    
    const DeleteFromFavoriteButton = getElementByText({ text: 'Hapus dari Favorit', tag: 'button' });

    expect(DeleteFromFavoriteButton).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await prepareFavoriteButton(restaurant);

    const AddToFavoriteButton = getElementByText({ text: 'Tambahkan ke Favorit', tag: 'button' });
    AddToFavoriteButton.dispatchEvent(new Event('click'));
    const FavoritedRestaurant = await IDB.FavoriteRestaurant.get(restaurant.id);

    expect(FavoritedRestaurant).toEqual(restaurant);
  });

  it('should not add the restaurant duplicate when its already favorited', async () => {
    await prepareFavoriteButton(restaurant);

    const AddToFavoriteButton = getElementByText({ text: 'Tambahkan ke Favorit', tag: 'button' });
    await IDB.FavoriteRestaurant.put(restaurant);
    AddToFavoriteButton.dispatchEvent(new Event('click'));
    const AllFavoritedRestaurant = await IDB.FavoriteRestaurant.getAll();

    expect(AllFavoritedRestaurant).toEqual([restaurant]);
  });

  it('should not add restaurant when it has no restaurant argument', async () => {
    await prepareFavoriteButton();

    const AddToFavoriteButton = getElementByText({ text: 'Tambahkan ke Favorit', tag: 'button' });
    AddToFavoriteButton.dispatchEvent(new Event('click'));

    const AllFavoritedRestaurant = await IDB.FavoriteRestaurant.getAll();
    expect(AllFavoritedRestaurant).toEqual([]);
  });
});
