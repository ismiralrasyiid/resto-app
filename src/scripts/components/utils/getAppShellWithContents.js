import Footer from '../Footer';
import Header from '../Header';
import SkipToContentNavigation from '../SkipToContentNavigation';
import ToTopNavigation from '../ToTopNavigation';

export default function getAppShellWithContents(...Sections) {
  const MainContent = document.createElement('main');
  MainContent.id = 'mainContent';
  Sections.forEach((Section) => {
    MainContent.appendChild(Section);
  });

  return [SkipToContentNavigation, Header, MainContent, Footer, ToTopNavigation];
}
