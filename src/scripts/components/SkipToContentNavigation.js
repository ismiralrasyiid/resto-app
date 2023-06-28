import createAnchor from './utils/createAnchor';

const SkipToContentNavigation = createAnchor({
  text: 'Menuju ke Konten',
  link: '#mainContent',
});
SkipToContentNavigation.classList.add('skipToContent');

export default SkipToContentNavigation;
