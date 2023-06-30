import routes from './routes/routes';
import UrlParser from './routes/urlParser';

const App = {
  Page() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const Page = routes[url];
    return Page;
  },
};

export default App;
