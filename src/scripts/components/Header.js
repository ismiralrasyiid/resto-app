import NavigationBar from './NavigationBar';

const Header = document.createElement('header');

const Title = document.createElement('h1');
Title.innerText = '[ ByIsmir ]';

Header.appendChild(Title);
Header.appendChild(NavigationBar);

export default Header;
