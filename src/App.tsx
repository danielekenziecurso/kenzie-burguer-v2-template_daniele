import Providers from './providers/providers';
import AppRouter from './routes/routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <Providers>
      <GlobalStyles />
      <AppRouter />
    </Providers>
  </>
);

export default App;
