const assert = require('assert');

Feature('favorite restaurant');

Scenario('adding first restaurant to favorite then remove it', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Daftar Restoran Favorit', 'h2');
  I.see('Tidak ada restoran favorit');
  I.amOnPage('/');

  I.see('Daftar Restoran', 'h2');
  I.waitForElement('.detailLink', 3);
  I.seeElement('.detailLink');
  const firstRestaurantLink = locate('.detailLink').first();
  const firstRestaurantHeading = locate('.restaurantItem h3').first();
  const firstRestaurantHeadingText = await I.grabTextFrom(firstRestaurantHeading);
  I.click(firstRestaurantLink);

  I.waitForElement('#favoriteButtonContainer button', 3);
  I.see('Tambahkan ke Favorit');
  I.click('#favoriteButtonContainer button');

  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurantItem', 3);
  I.seeElement('.restaurantItem');

  const likedRestaurantHeadingText = await I.grabTextFrom('.restaurantItem h3');

  assert.strictEqual(firstRestaurantHeadingText, likedRestaurantHeadingText);

  I.click('.restaurantItem');
  
  I.wait(2);
  I.see('Hapus dari Favorit');
  I.click('#favoriteButtonContainer button');

  I.amOnPage('/#/favorite');
  I.see('Daftar Restoran Favorit', 'h2');
  I.see('Tidak ada restoran favorit');
});