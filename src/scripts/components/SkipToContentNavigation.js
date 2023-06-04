import createAnchor from './utils/createAnchor';

const SkipToContentNavigation = createAnchor({
  text: 'Menuju ke Konten',
  link: '#restaurantSection',
});
SkipToContentNavigation.classList.add('skipToContent');

export default SkipToContentNavigation;
